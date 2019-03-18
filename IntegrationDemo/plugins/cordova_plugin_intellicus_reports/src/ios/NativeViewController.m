//
//  NativeViewController.m
//  intellicus_integration
//
//  Created by Sachendra Singh on 2/7/19.
//

#import "NativeViewController.h"
#import "AppDelegate.h"
#import <IntellicusiOSLib/IntellicusiOSLib.h>

#define IS_SUBSCRIBED_REPORT @"IS_SUBSCRIBED_REPORT"

#define REPORT_ID @"A1FB8BED-BC8B-2829-6D5B-F4BE531CC9F3"

@interface NativeViewController ()<ILTasksExecuterDelegate,
                                    ServerRegistrationDelegate,
                                    IntellicusiOSAppDelegate>

@property ServerRegistration *serverRegistrationInternal;
@property (nonatomic, strong) ActivityAlertView *activityAlertView;

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    [self startLoadingAlert:@"Initializing Library"];
    [self readPersistentInformations];
    
}

#pragma mark - IntellicusiOSLib mehtods -

// readPersistentInformations is a private method, which should be implemented in the first view controller of the application.
-(void)readPersistentInformations
{
    // Set subscribed report maximum screen shots property
    [self setSubscribedReportMaximumScreenshots];
    
    AppDelegate *pAppDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    pAppDelegate.intellicusiOSApp.delegate = self;
    
    // Setup intellicus framework/library. The setup method reads the persistent information from keychain and synchronizes database to valid state. The setup method reads the information in background thread and once finished, it informs using delegate method
    [pAppDelegate.intellicusiOSApp setUpIntellicusiOSLib];
}

// This method sets the subscribed report maximum snapshot property. This property is required if the application wants to use subscribed reports functionality of Intellicus Framework
// This method is using hardcoded number for this property but if the application wants then application can ask this information from user and persist the value of this property in permanent storage like NSUserDefault, Sqlite database etc.
-(void)setSubscribedReportMaximumScreenshots
{
    //set this information in library
    AppDelegate *pAppDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    pAppDelegate.intellicusiOSApp.libConfigurationInfo.subscribedReportMaxScreenshots = 10;
}

-(void)addServerInformation
{
    //Get the IntellicusiOSApp object
    AppDelegate *pAppDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    IntellicusiOSApp *pIntellicusiOSApp = pAppDelegate.intellicusiOSApp;
    
    //Get server information collection from the app object
    ServerInformationCollection *pServerInfoCollection = pIntellicusiOSApp.libConfigurationInfo.serverInfoCollection;
    
    //If server is not already added then only add it.
    if ([pServerInfoCollection serverInformationCount] == 0) {
        
        //Preparing user dictionary
        NSMutableDictionary *pUserDictionary = [[NSMutableDictionary alloc]init];
        
        //Set user ID
        [pUserDictionary setValue:@"Admin"
                           forKey:KEY_USERID];
        
        //Set User Password
        [pUserDictionary setValue:@"Admin"
                           forKey:KEY_PASSWORD];
        
        //Set Organization ID
        [pUserDictionary setValue:@"Intellica"
                           forKey:KEY_ORGID];
        
        //Set User ID
        [pUserDictionary setValue:@"Admin"
                           forKey:KEY_APPID];
        
        [pUserDictionary setValue:@""
                           forKey:KEY_VERSION];
        
        //Prepare server URL
        NSMutableString *strUrl = [[NSMutableString alloc]initWithString:@"http://172.26.43.84:8016/intellicus"];
        //Add the communication servlet string to the base URL
        [strUrl appendString:SERVLET_STRING];
        
        ServerInformation *pServerInformation = [[ServerInformation alloc] initWithServerURL:strUrl
                                                                                    userInfo:pUserDictionary
                                                                                addTimeStamp:[IILUtility currentDate]
                                                                              securityPolicy:nil
                                                                  lastCommunicationTimeStamp:[IILUtility currentDate]
                                                                             connectedStatus:eSCS_CONNECTED
                                                                                       error:nil
                                                                isValidBasedOnSecurityPolicy:YES
                                                                               serverVersion:@"18.0"];
        
        
        [IILUtility addServerInformationIntoCollection:pServerInformation];
        //Set as default server
        [IILUtility setAppDefaultServer:pServerInformation];
    }
    
    if(![self isReportSubscribed])
    {
        [self startLoadingAlert:@"Subscribing Report"];
        [self subscribeReport];
    }
    else
    {
        [self loadReportInViewer];
    }
}

-(void) subscribeReport
{
    SubscribeReport *report = [[SubscribeReport alloc] initWithEntityId:[self entityId]
                                                             entityName:[self entityName]
                                                       parentCategoryId:nil
                                                     parentCategoryName:@"HR"
                                                   sourceServerUniqueId:nil
                                                            lastUpdated:[NSDate date]
                                                               uniqueId:-1
                                                           updateStatus:eDSUS_UPDATE_NONE
                                                           errorMessage:nil
                                                               dataSize:[NSNumber numberWithInt:0]
                                                       isLocallyUpdated:NO
                                                     isAllowedInListing:YES
                                                     containsParameters:NO
                                                     andIsLocallyHidden:NO];
    report.reportDesignMode = [self reportDesignMode];
    
    SRTasksExecuter *taskExecuter = [[SRTasksExecuter alloc] initWithTasksExecuterDelegate:self
                                                                        andSubscribeReport:report
                                                                  shouldFetchParameterForm:report.containsParameters];
    [taskExecuter start];
}

-(BOOL) isReportSubscribed
{
    BOOL isOLAPReport = [self reportDesignMode] == eRDM_OLAP;
    if(isOLAPReport)
    {
        IILDSDao *dao = [[IILDSDao alloc] initWithDatabase:OLAP_DATABASE];
        OlapReport *olapReport = [dao getOlapReportWithId:self.strEntityId];
        dao = nil;
        
        return olapReport != nil;
    }
    else
    {
        IILDSDao *dao = [[IILDSDao alloc] initWithDatabase:DATABASE_NAME];
        Report *report = [dao getReportWithId:self.strEntityId];
        dao = nil;
        
        return report != nil;
    }
}

-(void) loadReportInViewer
{
    IILDSDao *dao = [[IILDSDao alloc] initWithDatabase:DATABASE_NAME];
    
    id report = [dao getReportWithId:[self entityId]];
    
    if([self reportDesignMode] == eRDM_OLAP)
    {
        dao = [[IILDSDao alloc] initWithDatabase:OLAP_DATABASE];
        report = [dao getOlapReportWithReportObjectId:[self entityId]];
    }
    
    [self loadViewerForReport:report dao:dao];
    
    dao = nil;
}

-(void) loadViewerForReport:(Report*)report
                        dao:(IILDSDao*)dao
{
    UIViewController *viewController = [self viewControllerForReport:report
                                                                 dao:dao];
    if(viewController)
    {
        [self.view addSubview:viewController.view];
        [viewController.view constraintViewToBoundsOf:self.view];
        
        [self addChildViewController:viewController];
    }
}

-(UIViewController*) viewControllerForReport:(id)report
                                         dao:(IILDSDao*)dao
{
    if([self reportDesignMode] == eRDM_OLAP)
    {
        OlapReportViewController *viewController = [[OlapReportViewController alloc] init];
        viewController.olapReport = (OlapReport*)report;
        return viewController;
    }
    else if([self reportDesignMode] == eRDM_ADHOC)
    {
        AdhocReportViewController *viewController = [[AdhocReportViewController alloc] init];
        viewController.subscribeReport = [dao getSubscribeReportForReport:(Report*)report];
        return viewController;
    }
    
    return nil;
}

// This delegate method is called by Intellicus framework when it finishes setting up the framework
#pragma mark - IntellicusiOSApp delegate Methods -
-(void)intellicusiOSAppDidRestorePersistentInfo:(IntellicusiOSApp *)pSender
{
    
    // Delay execution of my block for 10 seconds.
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 2 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
        
        AppDelegate *appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        IntellicusiOSApp *intellicusiOSApp = appDelegate.intellicusiOSApp;
        
        if(intellicusiOSApp.libConfigurationInfo.isEncryptionOn)
        {
            [((AppDelegate*)[UIApplication sharedApplication].delegate).intellicusiOSApp.libConfigurationInfo setIsEncryptionOn:FALSE success:^(BOOL success) {
                [self stopLoadingAlert];
                [self addServerInformation];
            }];
        }
        else
        {
            [self stopLoadingAlert];
            [self addServerInformation];
        }
    });
}


# pragma Loading alert methods
-(void) startLoadingAlert:(NSString*)strMsg
{
    //Start ActivityAlertView.
    if (self.activityAlertView == nil) {
        
        ActivityAlertView *pActivityAlertView = [[ActivityAlertView alloc] initWithTitle:@"Please Wait..."
                                                                              andMessage:strMsg];
        self.activityAlertView = pActivityAlertView;
        
        //        self.activityAlertView.delegate = self;
        
        pActivityAlertView = nil;
    }
    else {
        
        [self.activityAlertView setMessage:strMsg];
    }
    
    if (self.activityAlertView.isVisible == FALSE) {
        
        [self.activityAlertView start];
    }
    
}

-(void)stopLoadingAlert
{
    if (self.activityAlertView.isVisible) {
        
        [self.activityAlertView close];
        self.activityAlertView = nil;
    }
}

#pragma mark - self data source methods -
-(NSString*)serverURL
{
    return self.strServerUrl;
}

-(NSString*) userName
{
    return self.strUsername;
}

-(NSString*)password
{
    return self.strPassword;
}

-(NSString*) entityName
{
    return self.strEntityTitle;
}

-(NSString*) entityId
{
    return self.strEntityId;
}

-(EReportDesignMode) reportDesignMode
{
    return [self.strDesignMode isEqualToString:@"OLAP"] ? eRDM_OLAP : eRDM_ADHOC;
}

#pragma mark - ILTaskExecuterDelegate methods -
-(void)tasksFinished:(id)sender
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [self stopLoadingAlert];
    });
    
    if([sender allTasksFinishedSuccessfully])
    {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self loadReportInViewer];
        });
        [[NSUserDefaults standardUserDefaults] setBool:TRUE forKey:IS_SUBSCRIBED_REPORT];
    }
    else
    {
        // TODO : Show error
    }
}

-(void)taskFinished:(id)sender
{
    
}

@end
