webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchuduledInterviewPageModule", function() { return SchuduledInterviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schuduled_interview__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchuduledInterviewPageModule = /** @class */ (function () {
    function SchuduledInterviewPageModule() {
    }
    SchuduledInterviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schuduled_interview__["a" /* SchuduledInterviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schuduled_interview__["a" /* SchuduledInterviewPage */]),
            ],
        })
    ], SchuduledInterviewPageModule);
    return SchuduledInterviewPageModule;
}());

//# sourceMappingURL=schuduled-interview.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchuduledInterviewPage; });
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
 * Generated class for the SchuduledInterviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchuduledInterviewPage = /** @class */ (function () {
    function SchuduledInterviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SchuduledInterviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchuduledInterviewPage');
    };
    SchuduledInterviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schuduled-interview',template:/*ion-inline-start:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/pages/schuduled-interview/schuduled-interview.html"*/'<!--\n  Generated template for the SchuduledInterviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title><span text-color="title-color">Setup Mock Interview</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        html{\n            height: 100%;\n            padding:0;\n			padding-top:50;\n        }\n body {\n    height: 100%;\n    padding: 8px;\n	padding-top:50;\n    margin:0;\n    box-sizing: border-box;\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n[data-layout] {\n  display: -webkit-flex;\n  display: flex;\n}\n\n[data-layout="row"] {\n  -webkit-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n}\n\n[data-layout="col"] {\n  -webkit-flex-flow: column nowrap;\n  flex-flow: column nowrap;\n}\n\n[data-item="hdr"],\n[data-item="ftr"],\n[data-item="left"],\n[data-item="right"] {\n  -webkit-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\n\n[data-item="body"] {\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\ndiv.ftr, div.right,\n[data-item="ftr"],\n[data-item="right"] {\n  -webkit-order: 3;\n  order: 3;\n}\n[data-align="center"] {\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.item {\n  flex-wrap: wrap;\n  padding-top:50px;\n}\n\n.item > div {\n  margin: 0;\n    width: 50%;\n    padding: 16px;\n    box-sizing: border-box;\n    height: 240px;\n}\nh1{\n    padding:0 0 8px 16px;\n    margin:0;\n}\nh2{\n    font-size:14px;\n}\n.nested{\n /* background-color:#950F6C; */\n    height:100%;\n    border-radius:2px;\n     border:1px solid #91006A;\n    box-shadow:0 12px 5px -10px rgba(0,0,0,.1), 0 0 4px 0 rgba(0,0,0,.1);\n    padding:8px;\n}\n.thumb{\n  opacity: 0.5;\n}\nh2{\n  text-align: center;\n}\n</style>\n</head>\n<body data-layout="col" style="height:100%" padding-top="70px" data-align="center">\n    <div data-item="body" style="height:100%"padding-top="50px">\n      <img src="../../assets/imgs/page2.png" alt="">\n    </div>\n     \n</body>\n</html>\n'/*ion-inline-end:"/Users/sachendrasingh/Desktop/IonicDemo 2/IntegrationDemo/src/pages/schuduled-interview/schuduled-interview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SchuduledInterviewPage);
    return SchuduledInterviewPage;
}());

//# sourceMappingURL=schuduled-interview.js.map

/***/ })

});
//# sourceMappingURL=0.js.map