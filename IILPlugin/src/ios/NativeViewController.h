//
//  NativeViewController.h
//  intellicus_integration
//
//  Created by Sachendra Singh on 2/7/19.
//

#import <UIKit/UIKit.h>
#import "DismissableViewController.h"

NS_ASSUME_NONNULL_BEGIN

@interface NativeViewController : DismissableViewController

@property (atomic, strong) NSString* strEntityTitle;
@property (atomic, strong) NSString* strEntityId;
@property (atomic, strong) NSString* strEntityType;
@property (atomic, strong) NSString* strDesignMode;
@property (atomic, strong) NSString* strServerUrl;
@property (atomic, strong) NSString* strUsername;
@property (atomic, strong) NSString* strPassword;

@end

NS_ASSUME_NONNULL_END
