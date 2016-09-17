
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Router }        from '@angular/router';
import { AppComponent }             from './app.component';
import { TeamComponent }            from './team/team.component'
import { DashboardComponent }       from './dashboard/dashboard.component'
import { RegisterComponent}         from './register/register.component'
import { PlayerDetailComponent }    from './team/player-detail.component';
import { PlayerAddComponent }       from './team/player-add.component';
import { TeamService }              from './services/team.service'
import { routing }                  from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        TeamComponent,
        DashboardComponent,
        RegisterComponent,
        PlayerDetailComponent,
        PlayerAddComponent
    ],
    providers: [
        TeamService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}