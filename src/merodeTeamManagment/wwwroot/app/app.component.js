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
var team_service_1 = require('./services/team.service');
var team_component_1 = require('./team/team.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var register_component_1 = require('./register/register.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var player_detail_component_1 = require('./team/player-detail.component');
var player_add_component_1 = require('./team/player-add.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Team';
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/team',
                name: 'Team',
                component: team_component_1.TeamComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: '/register',
                name: 'Register',
                component: register_component_1.RegisterComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:name',
                name: 'PlayerDetail',
                component: player_detail_component_1.PlayerDetailComponent
            },
            {
                path: '/add',
                name: 'AddPlayer',
                component: player_add_component_1.PlayerAddComponent
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n   <h1>{{title}}</h1>\n    <nav>\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Team']\">Team</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['./app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                team_service_1.TeamService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTRCLHlCQUM1QixDQUFDLENBRG9EO0FBQ3JELCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCxvQ0FBbUMsaUNBQ25DLENBQUMsQ0FEbUU7QUFDcEUsbUNBQWlDLCtCQUNqQyxDQUFDLENBRCtEO0FBQ2hFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBQzlGLHdDQUFzQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3ZFLHFDQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBK0NqRTtJQUFBO1FBQ0UsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQUNwQixDQUFDO0lBL0NEO1FBQUMsK0JBQVcsQ0FBQztZQUNYO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLFNBQVMsRUFBRSw4QkFBYTthQUN6QjtZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHdDQUFrQjthQUNoQztZQUNEO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtnQkFDNUIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSwrQ0FBcUI7YUFDbkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHlDQUFrQjthQUNoQztTQUNGLENBQUM7UUFDRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGlNQU9YO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7WUFDN0IsU0FBUyxFQUFFO2dCQUNYLG9DQUFnQjtnQkFDaEIsMEJBQVc7YUFDVjtTQUNKLENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RlYW0uc2VydmljZSdcclxuaW1wb3J0IHsgVGVhbUNvbXBvbmVudCB9IGZyb20gJy4vdGVhbS90ZWFtLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7IFBsYXllckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdGVhbS9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBsYXllckFkZENvbXBvbmVudCB9IGZyb20gJy4vdGVhbS9wbGF5ZXItYWRkLmNvbXBvbmVudCc7XHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvdGVhbScsXHJcbiAgICBuYW1lOiAnVGVhbScsXHJcbiAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxyXG4gICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgICAgcGF0aDogJy9yZWdpc3RlcicsXHJcbiAgICAgIG5hbWU6ICdSZWdpc3RlcicsXHJcbiAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBwYXRoOiAnL2RldGFpbC86bmFtZScsXHJcbiAgICAgIG5hbWU6ICdQbGF5ZXJEZXRhaWwnLFxyXG4gICAgICBjb21wb25lbnQ6IFBsYXllckRldGFpbENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBwYXRoOiAnL2FkZCcsXHJcbiAgICAgIG5hbWU6ICdBZGRQbGF5ZXInLFxyXG4gICAgICBjb21wb25lbnQ6IFBsYXllckFkZENvbXBvbmVudFxyXG4gIH1cclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICA8aDE+e3t0aXRsZX19PC9oMT5cclxuICAgIDxuYXY+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydEYXNoYm9hcmQnXVwiPkRhc2hib2FyZDwvYT5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1RlYW0nXVwiPlRlYW08L2E+XHJcbiAgICA8L25hdj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC9hcHAuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBUZWFtU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICB0aXRsZSA9ICdNeSBUZWFtJztcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
