"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        this.allowAddServer = false;
        this.serverCreateMsg = "No server created";
        this.serverName = "Default server";
    }
    ServersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tm = 2000 + (Math.random() * 3200);
        console.log("tm " + tm);
        var fnDelegate = function (tm, me) {
            console.log("tm tring " + tm);
            me.allowAddServer = true;
        };
        setTimeout(function () { fnDelegate(tm, _this); }, tm);
        tm = 8000 + (Math.random() * 3200);
        console.log("tm " + tm);
    };
    ServersComponent.prototype.doAddNewServer = function () {
        console.log("Add");
        var dt = new Date();
        this.serverCreateMsg = "Server crearted at " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds()
            + " with name : " + this.serverName + ".";
    };
    ServersComponent.prototype.onServerNameTxtChange = function (event) {
        console.log(event);
        //this.serverName
        //// this.serverName = (<HTMLInputElement>event.target).value;
    };
    ServersComponent = __decorate([
        core_1.Component({
            selector: 'app-servers',
            templateUrl: './servers.component.html',
            styleUrls: ['./servers.component.css']
        })
    ], ServersComponent);
    return ServersComponent;
}());
exports.ServersComponent = ServersComponent;
