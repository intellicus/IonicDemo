webpackJsonp([2],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedInterviewPageModule", function() { return CompletedInterviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completed_interview__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompletedInterviewPageModule = /** @class */ (function () {
    function CompletedInterviewPageModule() {
    }
    CompletedInterviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__completed_interview__["a" /* CompletedInterviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__completed_interview__["a" /* CompletedInterviewPage */]),
            ],
        })
    ], CompletedInterviewPageModule);
    return CompletedInterviewPageModule;
}());

//# sourceMappingURL=completed-interview.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedInterviewPage; });
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


/**
 * Generated class for the CompletedInterviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletedInterviewPage = /** @class */ (function () {
    function CompletedInterviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompletedInterviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletedInterviewPage');
    };
    CompletedInterviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completed-interview',template:/*ion-inline-start:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/pages/completed-interview/completed-interview.html"*/'<!--\n  Generated template for the CompletedInterviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span text-color="title-color"> Completed Interview</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        html{\n            height: 100%;\n            padding:0;\n			\n        }\n body {\n    height: 100%;\n    padding: 8px;\n    margin:0;\n	padding-top:50;\n    box-sizing: border-box;\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n[data-layout] {\n  display: -webkit-flex;\n  display: flex;\n}\n\n[data-layout="row"] {\n  -webkit-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n}\n\n[data-layout="col"] {\n  -webkit-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n}\n\n[data-item="hdr"],\n[data-item="ftr"],\n[data-item="left"],\n[data-item="right"] {\n  -webkit-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\n\n[data-item="body"] {\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\ndiv.ftr, div.right,\n[data-item="ftr"],\n[data-item="right"] {\n  -webkit-order: 3;\n  order: 3;\n}\n[data-align="center"] {\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.item {\n  flex-wrap: wrap;\n  padding-top:50px;\n}\n\n.item > div {\n  margin: 0;\n    width: 50%;\n    padding: 16px;\n    box-sizing: border-box;\n    height: 240px;\n}\nh1{\n    padding:0 0 8px 16px;\n    margin:0;\n}\nh2{\n    font-size:14px;\n}\n.nested{\n /* background-color:#950F6C; */\n    height:100%;\n    border-radius:2px;\n     border:1px solid #91006A;\n    box-shadow:0 12px 5px -10px rgba(0,0,0,.1), 0 0 4px 0 rgba(0,0,0,.1);\n    padding:8px;\n}\n.thumb{\n  opacity: 0.5;\n}\nh2{\n  text-align: center;\n}\n</style>\n</head>\n<body data-layout="col" padding-top="70px" data-align="center">\n   \n      <img src="../../assets/imgs/page2.png" style="height:100%;width:100%"  alt="">\n    \n   \n</body>\n</html>\n\n'/*ion-inline-end:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/pages/completed-interview/completed-interview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CompletedInterviewPage);
    return CompletedInterviewPage;
}());

//# sourceMappingURL=completed-interview.js.map

/***/ })

});
//# sourceMappingURL=2.js.map