# IALPlugin For Android

## Installation
### Add "IALPlugin" in Ionic 3 project
1. Download and extract "IonicDemo.zip” to your local directory  
	i. This zip contains two folders namely "IALPlugin" and "IntegrationDemo"  
	ii. IntegrationDemo folder contains a sample Ionic application  
	iii. IALPlugin folder contains Cordova plugin for intellicus  
(We will use path of this IALPlugin folder in later part of this guide)*  
2. Create new sample ionic 3 project (if not created earlier)  
i. Open terminal  
ii. Navigate to path where you want to create a new ionic 3 project  
iii. Execute the following command in terminal  
```sh  
ionic start Sample blank
```
iv. Type 'Y' when prompted to integrate your new application with Cordova to target native iOS and Android  

3.	Add Android platform in Ionic application (if not added earlier)  
i. Open Terminal  
ii.	Navigate to Ionic 3 project root directory  
iii. Execute the following command in terminal  
```sh
ionic cordova platform add android
```
4. Add IALPlugin into Ionic app  
i. Open terminal  
ii. Navigate to Ionic 3 project root directory  
iii. Execute the following command in terminal   
```sh
ionic cordova plugin add <path to IALPlugin>
```
*where <path to IALPlugin> is the full path of the ..../IALPlugin folder(you extracted from .zip)  




###	Initialize library Plugin  
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

## Using IALPlugin in ionic 3 App  
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
Where: -   
* < Report ID of Ad hoc/OLAP report >:  Id of the report you want to view, you can get this Id through Intellicus Web client in properties of report.   
* < Report Title>: Title of the report you want to view e.g. "Interview Trends".  
* < Entity_Type>:  Type of entity you want to view (for this sample we are supporting “REPORT” only) e.g. "REPORT"  
* < Design_Mode>: Design Mode of report you want to view, you can find type of report through Intellicus Web client in report   properties (For this sample we are supporting “ADHOC”/”OLAP” only) e.g. "ADHOC"  
* < URL of intellicus server> : URL of Intellicus server you want to connect e.g. https://demo.intellicus.com/intellicus  
* < USERNAME : username of active user on Intellicus server   
* < PASSWORD>: password for above user  

7. Build Ionic project for Android platform    
```sh
ionic cordova build android  
```
8. Run Ionic project on Android emulator  
```sh
ionic cordova run android  
```