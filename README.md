# Intellicus Integration in Ionic Project

## Installation
### Add Intellicus plugins in Ionic 3 project
1. Download and extract "IonicDemo.zip” to your local directory  
i. This zip contains three folders namely "IALPlugin", "IILPlugin" and "IntegrationDemo"  
ii. IntegrationDemo folder contains a sample Ionic application  
iii. IALPlugin and IILPlugin folders contain Cordova plugin for intellicus  
(We will use path of IALPlugin and IILPlugin folders in later part of this guide)*  
2. Create new sample ionic 3 project (if not created earlier)  
i. Open terminal  
ii. Navigate to path where you want to create a new ionic 3 project  
iii. Execute the following command in terminal  
```sh  
ionic start Sample blank
```
iv. Type 'Y' when prompted to integrate your new application with Cordova to target native iOS and Android  

3.    Add Android platform in Ionic application (if not added earlier)  
i. Open Terminal  
ii.    Navigate to Ionic 3 project root directory  
iii. Execute the following command in terminal  
```sh
ionic cordova platform add android
```
4. Add Android plugin(IALPlugin) into Ionic app  
i. Open terminal  
ii. Navigate to Ionic 3 project root directory  
iii. Execute the following command in terminal   
```sh
ionic cordova plugin add <path to IALPlugin>
```
*where <path to IALPlugin> is the full path of the ..../IALPlugin folder(you extracted from .zip)  

5.    Add iOS platform in Ionic application (if not added earlier)  
i. Open Terminal  
ii.    Navigate to Ionic 3 project root directory  
iii. Execute the following command in terminal  
```sh
ionic cordova platform add ios
```
6. Add iOS plugin(IILPlugin) into Ionic app  
i. Open terminal  
ii. Navigate to Ionic 3 project root directory  
iii. Execute the following command in terminal   
```sh
ionic cordova plugin add <path to IILPlugin>
```
*where <path to IILPlugin> is the full path of the ..../IILPlugin folder(you extracted from .zip)  


##    Initialize library Plugin  

### Android
1. Open Manifest file of Android  
i. Browse to Ionic project root directory  
ii. Navigate to platforms > android > app > src > main  
iii. Open AndroidManifest.xml in any text editor  
2. Locate the <application> tag  
3. Copy the following line in attributes of <application … > tag and save the file  
```sh
android:name="com.intellicus.poc.plugin.application.IALApplication"
```

e.g. application tag should look like  
```sh
<application android:icon="@mipmap/icon"   
android:label="@string/app_name"  
...  
...  
android:name="com.intellicus.poc.plugin.application.IALApplication" >    
```

### iOS

1. Open Xcode workspace from ‘platforms/ios/’
2. Remove Embedded ‘IntellicusiOSLih.framework’ and ‘SQLite.framework’
3. Also, remove reference from project in Xcode (Do not remove from storage, just remove the reference)
4. Embed above frameworks (IntellicusiOSLib and SQLite) manually from ‘plugins/cordova_plugin_intellicus_reports/src/ios/“, check ‘Copy If Needed’ in the import window
5. Goto ‘Build Settings’ in project and set ‘Always Embed swift Standard Libraries’ to ‘Yes’

Integrate library
1. Preferably initialize library in “application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions”.  You can add a Private method “initializeIntellicusiOSLibrary” to your app delegate class and can call “initializeIntellicusiOSLibrary” method from “application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions”. Please refer to following piece of code

``` code
-(void)initializeIntellicusiOSLibrary
{

// Create library default configuration information object
IILLibInitializeInfo *pLibConfigInfo = [[IILLibInitializeInfo alloc]init];

// Set keychain group name to application bundle identifier (like com.companyname.appname). Library uses this group name to store persistent information in keychain(library uses keychain to store sensitive information like user name, password etc.)
pLibConfigInfo.keychainGroupName = [IILUtility bundleIdentifier];

// Set application window
pLibConfigInfo.appWindow = self.window;

// Get library’s initializer shared object and store it.
// To store intellicusiOSApp object you need to add a (nonatomic, strong) property to appdelegate class
self.intellicusiOSApp = [IntellicusiOSApp sharedInstance];

//Initialize library
[self.intellicusiOSApp initializeLibrary:pLibConfigInfo shouldFailOnJailbrokenDevice:NO];

pLibConfigInfo = nil;

// Set the default theme to the library/framework.
// getDefaultTheme is a private method, sample implementation of this method is given below.
self.intellicusiOSApp.appLevelInfo.appTheme = [self getDefaultTheme];
}

-(IILTheme *)getDefaultTheme
{
// Get the file path of theme plist file
// getDefaultThemeFilePath is a private method, sample implementation of this method is given below.
NSString *strThemePListFilePath = [self getDefaultThemeFilePath];

// Create the framework’s theme object and return it
IILTheme *pTheme = [[IILTheme alloc]initWithThemeName:@"Default"
themePlistPath:strThemePListFilePath];

return pTheme;
}

-(NSString *)getDefaultThemeFilePath
{
NSString *strThemeFileName = @"Default";

// For iPad we will load default_iPad theme file
if ([IILUtility isTargetDevicePad]) {

strThemeFileName = @"Default_iPad";
}

// Get Main Bundle
NSBundle *pMainBundle = [NSBundle mainBundle];

// Theme files have iiltheme.plist extensions
NSString *strThemeFilePath = [pMainBundle pathForResource:strThemeFileName
ofType:@"iiltheme.plist"
inDirectory:nil];

return strThemeFilePath;
}
```

## Using plugins in ionic 3 App  
1. Create a clickable item in your html page (found in < your_ionic_project_root_directory>  \src\pages\home)  
```sh
<button ion-button icon-start large round color="light">  
Open Report  
</button>  
```
2. Declare function to be called on Click event  
e.g.  add the following line inside button tag  
```sh
(click) = "openReport1()"  
```
now the button tag should look like  
```sh
<button ion-button (click) = "openReport1()" icon-start large round color="light">  
Open Report  
</button>  
```
3. Open .ts file corresponding to the above html page (usually found with the same name as html file in same directory)  

### Android
4. Declare IALPlugin variable in .ts file (after the import statements)  
```sh
declare var IALPlugin: any;
```
5. Implement openReport1() function in .ts file  
6. Call new_activity function of IALPlugin and provide the required information in json format  
e.g.  
```sh
openReport1() {  
IALPlugin.new_activity({  
"EntityId" :"<Report ID of adhoc/OLAP report >",  
"EntityTitle" : "<Report Title>",  
"EntityType" : "<Entity_Type>",  
"DesignMode" :"<Design_Mode>",  
"ServerUrl" : "<URL of intellicus server>",  
"UserName" : "<USERNAME of active user on Intellicus server>",  
"Password" : "<PASSWORD>"  });  
}  

```
### iOS

7. Declare IILPlugin variable in .ts file 
``` sh
declare var Intellicus_Reports:any;
```
8. Implement openReport1() function in .ts file  
9. Call new_activity function of IILPlugin and provide the required information in json format  
e.g.  
```sh
openReport1() {  
Intellicus_Reports.openReport({  
"EntityId" :"<Report ID of adhoc/OLAP report >",  
"EntityTitle" : "<Report Title>",  
"EntityType" : "<Entity_Type>",  
"DesignMode" :"<Design_Mode>",  
"ServerUrl" : "<URL of intellicus server>",  
"UserName" : "<USERNAME of active user on Intellicus server>",  
"Password" : "<PASSWORD>"  });  
}  

```
Where: -   
* < Report ID of Ad hoc/OLAP report >:  Id of the report you want to view, you can get this Id through Intellicus Web client in report properties   
* < Report Title>: Title of the report you want to view e.g. "Interview Trends"
* < Entity_Type>:  Type of entity you want to view (for this sample we are supporting “REPORT” only) e.g. "REPORT"  
* < Design_Mode>: Design Mode of report you want to view, you can find type of report through Intellicus Web client in report properties (For this sample we are supporting “ADHOC”/”OLAP” only) e.g. "ADHOC"  
* < URL of intellicus server> : URL of Intellicus server you want to connect e.g. https://demo.intellicus.com/intellicus  
* < USERNAME> : Username of active user on Intellicus server   
* < PASSWORD>: Password of the above user  

10. Build Ionic project for platform    
```sh
# Android -
ionic cordova build android
# iOS -
ionic cordova build ios
```
11. Run Ionic project   
```sh
# Android -
ionic cordova run android
# iOS -
ionic cordova run ios
```

