/********* Intellicus_Reports.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "NativeViewController.h"

/***id of the report you want to view, you can get this ID through Intellicus Web client in properties of report.*/
#define ENTITY_ID @"EntityId"
/**Title of the report you want to view.*/
#define ENTITY_TITLE @"EntityTitle"
/**Type of entity you want to view (for this sample we are supporting “REPORT” only )*/
#define ENTITY_TYPE @"EntityType"
/**Design Mode of report you want to view, you can find type of report through Intellicus Web client in report properties.(for this sample we are supporting “ADHOC”/”OLAP” only)*/
#define REPORT_DESIGN_MODE @"DesignMode"
/**URL of Intellicus server you want to connect*/
#define INTELLICUS_SERVER_URL @"ServerUrl"
/**username of active user on Intellicus server*/
#define USERNAME @"UserName"
/**password for user*/
#define PASSWORD @"Password"

@interface Intellicus_Reports : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;
@end

@implementation Intellicus_Reports

- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)openReport:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    
    NSMutableDictionary* config = [command.arguments objectAtIndex:0];
    
    if ([config isKindOfClass:[NSMutableDictionary class]]) {
        
        config = [config objectForKey:@"data"];
        
        NSString* entityId = [config objectForKey:ENTITY_ID];
        NSString* entityTitle = [config objectForKey:ENTITY_TITLE];
        NSString* entityType = [config objectForKey:ENTITY_TYPE];
        NSString* designMode = [config objectForKey:REPORT_DESIGN_MODE];
        NSString* serverURL = [config objectForKey:INTELLICUS_SERVER_URL];
        NSString* username = [config objectForKey:USERNAME];
        NSString* password = [config objectForKey:PASSWORD];
        
        if([self isStringEmpty:entityId]
           || [self isStringEmpty:entityTitle]
           || [self isStringEmpty:entityType]
           || [self isStringEmpty:designMode]
           || [self isStringEmpty:serverURL]
           || [self isStringEmpty:username]
           || [self isStringEmpty:password])
           {
               pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Required arguments are missing in json"];
           }
           else
           {
               pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
               
               NativeViewController *controller = [[NativeViewController alloc] init];
               
               controller.strEntityId = entityId;
               controller.strDesignMode = designMode;
               controller.strUsername = username;
               controller.strPassword = password;
               controller.strEntityType = entityType;
               controller.strEntityTitle = entityTitle;
               controller.strServerUrl = serverURL;
               
               UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:controller];
               
               [self.viewController presentViewController:navController
                                                 animated:FALSE
                                               completion:nil];
               
           }
        
    }
   else
   {
       pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Please supply data in json"];
   }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

-(BOOL) isStringEmpty:(NSString*)str
{
    return (str == nil || str.length == 0);
}
@end
