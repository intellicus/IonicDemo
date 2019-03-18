//
//  DismissableViewController.m
//  Navigation
//
//  Created by Sachendra Singh on 2/27/19.
//  Copyright © 2019 Intellicus. All rights reserved.
//

#import "DismissableViewController.h"

@interface DismissableViewController ()

@end

@implementation DismissableViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.navigationItem.leftBarButtonItem.enabled = TRUE;
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"Dismiss"
                                                                             style:UIBarButtonItemStyleDone
                                                                            target:self action:@selector(onBack:)];
}

-(void)onBack:(id)sender
{
    [self dismissViewControllerAnimated:TRUE completion:nil];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
