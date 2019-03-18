/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//  IntegrationDemo
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    [self initializeIntellicusiOSLibrary];
    
    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

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

@end
