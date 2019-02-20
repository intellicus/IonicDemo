import { Component } from '@angular/core';
import {IonicPage, NavController,NavParams  } from 'ionic-angular';
declare var IALPlugin: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  
  
  
    openReport1() {
/*
  * You need to pass data to the to the plugin in JSON format 
  * keys of JSON are defined in IALPlugin class those are:
  *
  * EntityId : id of the report you want to view, you can get this ID through Intellicus Web client in properties of report.,
  * EntityTitle : Title of the report you want to view,
  * EntityType :  Type of entity you want to view (for this sample we are supporting “REPORT” only ),
  * DesignMode : Design Mode of report you want to view, you can find type of report through Intellicus Web client in report properties.(for this sample we are supporting “ADHOC”/”OLAP” only)
  * ServerUrl : URL of Intellicus server you want to connect,
  * UserName : username of active user on Intellicus server
  * Password : password for above user 
  * 
  */  
		IALPlugin.new_activity({
				"EntityId" : "<first_Report_Id>",
                "EntityTitle" : "<First_Report_Title>",
                "EntityType" : "REPORT",
                "DesignMode" : "ADHOC",
                "ServerUrl" : "<URL_of_intellicus_server>",
                "UserName" : "<USERNAME_of_active_user_on_Intellicus_server>",
                "Password" : "<PASSWORD>"  });
	}
	

		
	openReport2() {

/*
  * You need to pass data to the to the plugin in JSON format 
  * keys of JSON are defined in IALPlugin class those are:
  *
  * EntityId : id of the report you want to view, you can get this ID through Intellicus Web client in properties of report.,
  * EntityTitle : Title of the report you want to view,
  * EntityType :  Type of entity you want to view (for this sample we are supporting “REPORT” only ),
  * DesignMode : Design Mode of report you want to view, you can find type of report through Intellicus Web client in report properties.(for this sample we are supporting “ADHOC”/”OLAP” only)
  * ServerUrl : URL of Intellicus server you want to connect,
  * UserName : username of active user on Intellicus server
  * Password : password for above user 
  * 
  */
    
		IALPlugin.new_activity({
				
				"EntityId"  : "<second_Report_Id>",
                "EntityTitle" : "<Second_Report_Title>",
                "EntityType"  : "REPORT",
                "DesignMode"  :"OLAP",
                "ServerUrl"  : "<URL_of_intellicus_server>",
                "UserName" : "<USERNAME_of_active_user_on_Intellicus_server>",
                "Password" :  "<PASSWORD>"     });
	}
 
	
	
	
	
	
	openMockInterviewPage() {
    this.navCtrl.push('MockInterviewPage');
  }

  
  
  
  
  
  
    openCompletedInterviewPage() {
    this.navCtrl.push('CompletedInterviewPage');
  }
}
