import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { TeamComponent }            from './team/team.component'
import { DashboardComponent }       from './dashboard/dashboard.component'
import { RegisterComponent}         from './register/register.component'
import { PlayerDetailComponent }    from './team/player-detail.component';
import { PlayerAddComponent }       from './team/player-add.component';

const appRoutes: Routes = [
    {
        path: '',
        component: RegisterComponent,
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'detail/:name',
        component: PlayerDetailComponent
    },
    {
        path: 'add',
        component: PlayerAddComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
