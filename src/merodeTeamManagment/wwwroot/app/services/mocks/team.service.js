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
var TeamService = (function () {
    function TeamService() {
    }
    TeamService.prototype.getPlayers = function (teamName) {
        return new Promise(function (resolve, rejected) {
            var players = new Array();
            players.push({ firstName: "Geoffrey", lastName: "Vandiest", email: "gvd8@hotmail.com" });
            resolve(players);
        });
    };
    TeamService.prototype.getPlayer = function (email) {
        return this.getPlayers('merode')
            .then(function (players) { return players.filter(function (player) { return player.email === email; })[0]; });
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map