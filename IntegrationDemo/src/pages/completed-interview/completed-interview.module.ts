import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedInterviewPage } from './completed-interview';

@NgModule({
  declarations: [
    CompletedInterviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedInterviewPage),
  ],
})
export class CompletedInterviewPageModule {}
