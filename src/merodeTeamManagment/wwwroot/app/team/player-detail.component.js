"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var team_service_1 = require('../services/team.service');
var router_1 = require('@angular/router');
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(teamService, route, router) {
        this.teamService = teamService;
        this.route = route;
        this.router = router;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var email = "";
        this.route.params.forEach(function (params) {
            email = params["email"];
        });
        this.teamService.getPlayer(email)
            .then(function (player) { return _this.player = player; });
    };
    PlayerDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerDetailComponent.prototype, "player", void 0);
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: 'player-detail',
            template: "\n  <div *ngIf=\"player\">\n    <h2>{{player.name}} details!</h2>\n    <div><label>id: </label>{{player.id}}</div>\n    <div>\n      <label>firstName: </label>\n      <input [(ngModel)]=\"player.firstName\" placeholder=\"FirstName\"/>\n    </div>\n    <div>\n      <label>lastName: </label>\n      <input [(ngModel)]=\"player.lastName\" placeholder=\"name\"/>\n    </div>\n    <div>\n      <label>email: </label>\n      <input [(ngModel)]=\"player.email\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"goBack()\">Back</button>\n  </div>\n",
            styleUrls: ['./app/team/player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_1.ActivatedRoute, router_1.Router])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map