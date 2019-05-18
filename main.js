(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "./src/app/main-banner/main-banner.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");









var routes = [
    { path: '', component: _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_3__["MainBannerComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'project', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__["ProgressComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'full-bootstrap-site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "./src/app/main-banner/main-banner.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _progress_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./progress.directive */ "./src/app/progress.directive.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_6__["MainBannerComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _progress_directive__WEBPACK_IMPORTED_MODULE_13__["ProgressDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"p-5 my-2 bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col text-center mb-3\">\n        <h1 class=\"text-warning display-2 text-capitalize\">\n          Contact us\n        </h1>\n        <p class=\"lead text-secondary\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quae!</p>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6 col-sm-10 col-xs-12\">\n        <div class=\"text-secondary text-center\">\n          <h2>Got Question?</h2>\n          <p>stay connected</p>\n        </div>\n        <form class=\"text-muted\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" id=\"name\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"text\" id=\"email\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message\">Message:</label>\n            <textarea  id=\"message\" rows=\"5\" class=\"form-control\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"button\" class=\"btn btn-outline-warning btn-block\" value=\"submit question\">\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-secondary\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <h1 class=\"text-white font-weight-light text-capitalize p-3\">pure bootstrap website</h1>\n        <h3 class=\"text-light font-weight-light font-italic mb-3\">Lorem ipsum dolor sit amet consectetur.</h3>\n        <div class=\"py-2\">\n          <a href=\"#\"><i class=\"fab fa-facebook fa-2x text-primary mx-2\"></i></a>\n          <a href=\"#\"><i class=\"fab fa-google-plus fa-2x text-danger mx-2\"></i></a>\n          <a href=\"#\"><i class=\"fab fa-twitter fa-2x text-info mx-2\"></i></a>\n          <a href=\"#\"><i class=\"fab fa-youtube fa-2x text-danger mx-2\"></i></a>\n        </div>\n        <p class=\"py-2 m-0 text-light\">&copy; copyright 2019 made by love &hearts;</p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-dark fixed-top\">\n  <a href=\"#\" class=\"navbar-brand\">\n    <i class=\"fas fa-child fa-2x text-warning\"></i>\n  </a>\n  <button class=\"navbar-toggler bg-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"nav\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/\" class=\"nav-link text-light text-uppercase font-weight-bold\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/skills\" class=\"nav-link text-light text-uppercase font-weight-bold\">Skills</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a routerLink=\"/project\" class=\"nav-link text-light text-uppercase font-weight-bold dropdown-toggle\" data-toggle=\"dropdown\">Projects</a>\n          <div class=\"dropdown-menu\">\n            <a href=\"#\" class=\"dropdown-item\">project 1</a>\n            <a href=\"#\" class=\"dropdown-item\">project 2</a>\n            <a href=\"#\" class=\"dropdown-item\">project 3</a>\n            <a href=\"#\" class=\"dropdown-item\">project 4</a>\n          </div>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/team\" class=\"nav-link text-light text-uppercase font-weight-bold\">Team</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/contact\" class=\"nav-link text-light text-uppercase font-weight-bold\">Contact</a>\n      </li>\n    </ul>\n\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input type=\"search\" class=\"form-control mr-sm-2\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-banner/main-banner.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-banner/main-banner.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tYmFubmVyL21haW4tYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main-banner/main-banner.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-banner/main-banner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container-fluid\">\n    <div class=\"row bg-info justify-content-center align-items-center\" style=\"height: 100vh;\">\n      <div class=\"col-sm-10 text-center\">\n          <h1 class=\"display-2 text-capitalize\">\n            <span class=\"text-warning\">pure bootstrap </span>\n            <span class=\"text-light font-weight-bold\">website</span>\n          </h1>\n          <h2 class=\"font-weight-light font-italic text-light\">Lorem ipsum dolor sit amet.</h2>\n          <a href=\"#\" class=\"btn btn-warning btn-lg text-capitalize mr-2\">press here</a>\n          <a href=\"#\" class=\"btn btn-danger btn-lg text-capitalize\">press here</a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/main-banner/main-banner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-banner/main-banner.component.ts ***!
  \******************************************************/
/*! exports provided: MainBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBannerComponent", function() { return MainBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainBannerComponent = /** @class */ (function () {
    function MainBannerComponent() {
    }
    MainBannerComponent.prototype.ngOnInit = function () {
    };
    MainBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-banner',
            template: __webpack_require__(/*! ./main-banner.component.html */ "./src/app/main-banner/main-banner.component.html"),
            styles: [__webpack_require__(/*! ./main-banner.component.css */ "./src/app/main-banner/main-banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainBannerComponent);
    return MainBannerComponent;
}());



/***/ }),

/***/ "./src/app/progress.directive.ts":
/*!***************************************!*\
  !*** ./src/app/progress.directive.ts ***!
  \***************************************/
/*! exports provided: ProgressDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressDirective", function() { return ProgressDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressDirective = /** @class */ (function () {
    function ProgressDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.Ptime = 0;
        this.width = 0;
    }
    ProgressDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.Pcolor);
        Text = this.renderer.createText(this.Pwidth + "%");
        this.renderer.appendChild(this.el.nativeElement, Text);
        if (this.Ptime <= 0) {
            this.Ptime = 300;
        }
        this.timeId = setInterval(function () {
            if (_this.width < _this.Pwidth) {
                _this.width++;
                _this.renderer.setStyle(_this.el.nativeElement, 'width', _this.width + "%");
            }
            else {
                clearInterval(_this.timeId);
            }
        }, this.Ptime);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressDirective.prototype, "Pwidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressDirective.prototype, "Pcolor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressDirective.prototype, "Ptime", void 0);
    ProgressDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appProgress]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ProgressDirective);
    return ProgressDirective;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.css":
/*!*************************************************!*\
  !*** ./src/app/progress/progress.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/*!**************************************************!*\
  !*** ./src/app/progress/progress.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"p-5\">\n  <div class=\"row\">\n    <div class=\"col text-center mb-3\">\n      <h1 class=\"text-warning display-2 text-capitalize\">\n        Progress\n      </h1>\n      <p class=\"lead text-secondary\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quae!</p>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-sm-10 text-secondary\">\n\n      <h2>HTML</h2>\n      <div class=\"progress bg-secondary mb-2\">\n        <div class=\"progress-bar\" appProgress Pcolor=\"#ff5722\" Pwidth=\"50\" Ptime=\"220\"></div>\n      </div>\n\n    <h2>CSS</h2>\n    <div class=\"progress bg-secondary mb-2\">\n      <div class=\"progress-bar\" appProgress Pcolor=\"red\" Pwidth=\"60\" Ptime=\"190\"></div>\n    </div>\n\n    <h2>javascript</h2>\n    <div class=\"progress bg-secondary mb-2\">\n      <div class=\"progress-bar\" appProgress Pcolor=\"#4a148c\" Pwidth=\"80\" Ptime=\"150\"></div>\n    </div>\n\n    <h2>Bootstrap</h2>\n    <div class=\"progress bg-secondary mb-2\">\n      <div class=\"progress-bar\" Pcolor=\"#009688\" Pwidth=\"100\" Ptime=\"100\" appProgress></div>\n    </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/progress/progress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"p-5\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col text-center mb-3\">\n        <h1 class=\"text-warning display-2 text-capitalize\">\n          projects\n        </h1>\n        <p class=\"lead text-secondary\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quae!</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-sm-6 mt-3\">\n        <img src=\"https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg\" alt=\"meeting img\" class=\"img-thumbnail\">\n        <h2 class=\"my-2 text-warning text-capitalize\">project one</h2>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-3\">\n        <img src=\"https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678_960_720.jpg\" alt=\"meeting img\" class=\"img-thumbnail\">\n        <h2 class=\"my-2 text-warning text-capitalize\">project two</h2>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-3\">\n        <img src=\"https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg\" alt=\"meeting img\" class=\"img-thumbnail\">\n        <h2 class=\"my-2 text-warning text-capitalize\">project Three</h2>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-3\">\n        <img src=\"https://cdn.pixabay.com/photo/2018/03/10/12/00/paper-3213924_960_720.jpg\" alt=\"meeting img\" class=\"img-thumbnail\">\n        <h2 class=\"my-2 text-warning text-capitalize\">project four</h2>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"p-5 bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col text-center mb-3\">\n        <h1 class=\"text-warning display-2 text-capitalize\">\n          skills\n        </h1>\n        <p class=\"lead text-secondary\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quae!</p>\n      </div>\n    </div>\n    <!-- end title -->\n    <div class=\"row text-center\">\n      <div class=\"col-lg-4 col sm-10 mx-auto mb-5\">\n        <i class=\"fas fa-desktop fa-6x text-warning text-warning mb-3\"></i>\n        <h1 class=\"text-secondary\">Development</h1>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis vitae aliquam necessitatibus corrupti reiciendis ratione dolorum animi excepturi fuga.</p>\n        <a href=\"#\" class=\"btn btn-outline-warning\">Learn More</a>\n      </div>\n      <div class=\"col-lg-4 col sm-10 mx-auto mb-5\">\n        <i class=\"fas fa-edit fa-6x text-warning text-warning mb-3\"></i>\n        <h1 class=\"text-secondary\">Design</h1>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis vitae aliquam necessitatibus corrupti reiciendis ratione dolorum animi excepturi fuga.</p>\n        <a href=\"#\" class=\"btn btn-outline-warning\">Learn More</a>\n      </div>\n      <div class=\"col-lg-4 col sm-10 mx-auto mb-5\">\n        <i class=\"fas fa-cogs fa-6x text-warning text-warning mb-3\"></i>\n        <h1 class=\"text-secondary\">Creativity</h1>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis vitae aliquam necessitatibus corrupti reiciendis ratione dolorum animi excepturi fuga.</p>\n        <a href=\"#\" class=\"btn btn-outline-warning\">Learn More</a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"p-2 p-sm-5 bg-secondary my-2\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col text-center mb-3\">\n        <h1 class=\"text-warning display-2 text-capitalize\">\n          team\n        </h1>\n        <p class=\"lead text-light\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quae!</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-10 mx-auto mb-4\">\n        <div class=\"card\">\n          <img src=\"https://cdn.pixabay.com/photo/2017/07/22/20/40/kid-2529907_960_720.jpg\" alt=\"kids\" class=\"card-top\" style=\"max-height: 400px;\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <h3 class=\"text-muted\">Priya</h3>\n            </div>\n            <div class=\"card-subtitle\">\n              <p class=\"lead text-secondary\">Lorem ipsum dolor sit amet.</p>\n            </div>\n            <div class=\"text-right\">\n              <a href=\"#\"><i class=\"fab fa-facebook fa-2x text-primary mx-2\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-twitter fa-2x text-info\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-youtube fa-2x text-danger mx-2\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-10 mx-auto mb-4\">\n        <div class=\"card\">\n          <img src=\"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg\" alt=\"kids\" class=\"card-top\" style=\"max-height: 400px;\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <h3 class=\"text-muted\">Raj</h3>\n            </div>\n            <div class=\"card-subtitle\">\n              <p class=\"lead text-secondary\">Lorem ipsum dolor sit amet.</p>\n            </div>\n            <div class=\"text-right\">\n              <a href=\"#\"><i class=\"fab fa-facebook fa-2x text-primary mx-2\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-twitter fa-2x text-info\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-youtube fa-2x text-danger mx-2\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-10 mx-auto mb-4\">\n        <div class=\"card\">\n          <img src=\"https://cdn.pixabay.com/photo/2015/06/12/21/58/child-807547_960_720.jpg\" alt=\"kids\" class=\"card-top\" style=\"max-height: 400px;\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <h3 class=\"text-muted\">Nadiya</h3>\n            </div>\n            <div class=\"card-subtitle\">\n              <p class=\"lead text-secondary\">Lorem ipsum dolor sit amet.</p>\n            </div>\n            <div class=\"text-right\">\n              <a href=\"#\"><i class=\"fab fa-facebook fa-2x text-primary mx-2\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-twitter fa-2x text-info\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-youtube fa-2x text-danger mx-2\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-progress></app-progress>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Die-hard\angular-project\full-bootstrap-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map