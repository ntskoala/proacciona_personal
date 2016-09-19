import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdInputModule} from '@angular2-material/input';
import {MdToolbarModule} from '@angular2-material/toolbar';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {LoginFormComponent} from './login/login-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule,
        MdToolbarModule
        ],
    declarations: [
        AppComponent,
        NavComponent,
        LoginFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
