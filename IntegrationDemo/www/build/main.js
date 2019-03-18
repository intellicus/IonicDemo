webpackJsonp([3],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/completed-interview/completed-interview.module": [
		268,
		2
	],
	"../pages/mock-interview/mock-interview.module": [
		269,
		1
	],
	"../pages/schuduled-interview/schuduled-interview.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openReport1 = function () {
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
        // IALPlugin.new_activity({
        // 		"EntityId" : "<first_Report_Id>",
        //             "EntityTitle" : "<First_Report_Title>",
        //             "EntityType" : "REPORT",
        //             "DesignMode" : "ADHOC",
        //             "ServerUrl" : "<URL_of_intellicus_server>",
        //             "UserName" : "<USERNAME_of_active_user_on_Intellicus_server>",
        //             "Password" : "<PASSWORD>"  });
        Intellicus_Reports.openReport({
            "EntityId": "EFB0B606-A9B7-2080-BB6A-2BE5DE64374B",
            "EntityTitle": "OlapWithThreshold",
            "EntityType": "REPORT",
            "DesignMode": "OLAP",
            "ServerUrl": "http://172.26.43.84:8016/intellicus",
            "UserName": "Admin",
            "Password": "Admin"
        });
    };
    HomePage.prototype.openReport2 = function () {
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
        // IALPlugin.new_activity({
        // 		"EntityId"  : "<second_Report_Id>",
        //             "EntityTitle" : "<Second_Report_Title>",
        //             "EntityType"  : "REPORT",
        //             "DesignMode"  :"OLAP",
        //             "ServerUrl"  : "<URL_of_intellicus_server>",
        //             "UserName" : "<USERNAME_of_active_user_on_Intellicus_server>",
        //             "Password" :  "<PASSWORD>"     });
        Intellicus_Reports.openReport({
            "EntityId": "BA9C685C-88F6-39CD-7727-A74D63715A21",
            "EntityTitle": "Adhoc with negative",
            "EntityType": "REPORT",
            "DesignMode": "Adhoc",
            "ServerUrl": "http://172.26.43.84:8016/intellicus",
            "UserName": "Admin",
            "Password": "Admin"
        });
    };
    HomePage.prototype.openMockInterviewPage = function () {
        this.navCtrl.push('MockInterviewPage');
    };
    HomePage.prototype.openCompletedInterviewPage = function () {
        this.navCtrl.push('CompletedInterviewPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title>\n	<span text-color="title-color"> Intellicus POC</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<!--\n<ion-content padding>\n    <button ion-button (click) = "openReport1()" icon-start large round color="light">\n    \n   Open Report 1\n  </button>\n   <button ion-button (click) = "openReport2()" icon-start large round color="light">\n    \n   Open Report 2\n  </button>\n  <p>\n    \n  </p>\n</ion-content>\n\n-->\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        html{\n            height: 100%;\n            padding:0;\n        }\n body {\n    height: 100%;\n    padding: 8px;\n    margin:0;\n    box-sizing: border-box;\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n[data-layout] {\n  display: -webkit-flex;\n  display: flex;\n}\n\n[data-layout="row"] {\n  -webkit-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n}\n\n[data-layout="col"] {\n  -webkit-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n}\n\n[data-item="hdr"],\n[data-item="ftr"],\n[data-item="left"],\n[data-item="right"] {\n  -webkit-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\n\n[data-item="body"] {\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\ndiv.ftr, div.right,\n[data-item="ftr"],\n[data-item="right"] {\n  -webkit-order: 3;\n  order: 3;\n}\n[data-align="center"] {\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.item {\n  flex-wrap: wrap;\n  padding-top:50px;\n}\n\n.item > div {\n  margin: 0;\n    width: 50%;\n    padding: 16px;\n    box-sizing: border-box;\n    height: 240px;\n}\nh1{\n    padding:0 0 8px 16px;\n    margin:0;\n}\nh2{\n    font-size:14px;\n}\n.nested{\n /* background-color:#950F6C; */\n    height:100%;\n    border-radius:2px;\n     border:1px solid #91006A;\n    box-shadow:0 12px 5px -10px rgba(0,0,0,.1), 0 0 4px 0 rgba(0,0,0,.1);\n    padding:8px;\n}\n.thumb{\n  opacity: 0.5;\n}\nh2{\n  text-align: center;\n}\n</style>\n</head>\n<body data-layout="col" data-align="center" style="height:100%">\n    <div data-layout="row" class="item">\n	  <div data-item="body" data-align="center" data-layout="row">\n                    <div data-item="body" data-align="center" class="nested" data-layout="col" (click) = "openMockInterviewPage()" >\n                    <div data-item="hdr">\n                      \n                      <img src="../../assets/imgs/baseline-list_alt-24px.svg" alt="" class="thumb">\n\n                    </div>\n                    <div data-item="hdr"><h2>Setup Mock Interview</h2></div>\n        \n                    </div>\n                </div>\n                <div data-item="body" data-align="center" data-layout="row">\n                        <div data-item="body" data-align="center" class="nested" data-layout="col" (click) = "openCompletedInterviewPage()" >\n                        <div data-item="hdr">\n                          <img src="../../assets/imgs/baseline-assignment_turned_in-24px.svg" alt="" class="thumb">\n                        </div>\n                        <div data-item="hdr"><h2>Completed Interview</h2></div>\n            \n                        </div>\n                    </div>\n        <div data-item="body" data-align="center" data-layout="row" (click) = "openReport1()">\n            <div data-item="body" data-align="center" class="nested" data-layout="col" >\n            <div data-item="hdr">\n              <img src="../../assets/imgs/reports.svg" alt="" class="thumb">\n            </div>\n            <div data-item="hdr"><h2>Recruitment Trend</h2></div>\n\n            </div>\n        </div>\n        <div data-item="body" data-align="center" data-layout="row" (click) = "openReport2()">\n                <div data-item="body" data-align="center" class="nested" data-layout="col" >\n                <div data-item="hdr">\n                  <img src="../../assets/imgs/baseline-assessment-24px.svg" alt="" class="thumb">\n                </div>\n                <div data-item="hdr"><h2>Vacancy Distribution</h2></div>\n                \n                </div>\n            </div>\n          \n        \n      </div>\n</body>\n</html>'/*ion-inline-end:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/completed-interview/completed-interview.module#CompletedInterviewPageModule', name: 'CompletedInterviewPage', segment: 'completed-interview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mock-interview/mock-interview.module#MockInterviewPageModule', name: 'MockInterviewPage', segment: 'mock-interview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schuduled-interview/schuduled-interview.module#SchuduledInterviewPageModule', name: 'SchuduledInterviewPage', segment: 'schuduled-interview', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map