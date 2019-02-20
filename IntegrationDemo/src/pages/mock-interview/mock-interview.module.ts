import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MockInterviewPage } from './mock-interview';

@NgModule({
  declarations: [
    MockInterviewPage,
  ],
  imports: [
    IonicPageModule.forChild(MockInterviewPage),
  ],
})
export class MockInterviewPageModule {}
