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
var PlayerAddComponent = (function () {
    function PlayerAddComponent(teamService, router) {
        this.teamService = teamService;
        this.router = router;
        this.player = { firstName: "", lastName: "", email: "" };
    }
    PlayerAddComponent.prototype.ngOnInit = function () {
    };
    PlayerAddComponent.prototype.goBack = function () {
        window.history.back();
    };
    PlayerAddComponent.prototype.save = function () {
        this.teamService.addPlayer(this.player);
        var link = ['team'];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerAddComponent.prototype, "player", void 0);
    PlayerAddComponent = __decorate([
        core_1.Component({
            selector: 'player-detail',
            templateUrl: 'app/team/player-add.component.html',
            styleUrls: ['./app/team/player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router])
    ], PlayerAddComponent);
    return PlayerAddComponent;
}());
exports.PlayerAddComponent = PlayerAddComponent;
//# sourceMappingURL=player-add.component.js.map