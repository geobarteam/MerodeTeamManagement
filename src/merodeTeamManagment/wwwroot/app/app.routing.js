"use strict";
var router_1 = require('@angular/router');
var team_component_1 = require('./team/team.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var register_component_1 = require('./register/register.component');
var player_detail_component_1 = require('./team/player-detail.component');
var player_add_component_1 = require('./team/player-add.component');
var appRoutes = [
    {
        path: '',
        component: register_component_1.RegisterComponent,
    },
    {
        path: 'team',
        component: team_component_1.TeamComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
    },
    {
        path: 'detail/:email',
        component: player_detail_component_1.PlayerDetailComponent
    },
    {
        path: 'addPlayer',
        component: player_add_component_1.PlayerAddComponent
    },
    {
        path: 'AddPlayer',
        component: player_add_component_1.PlayerAddComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map