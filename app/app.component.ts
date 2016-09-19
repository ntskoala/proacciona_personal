import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
// import './rxjs-operators';

import {NavComponent} from './nav/nav.component';
import {LoginFormComponent} from './login/login-form.component';

@Component({
    selector: 'app',
    template: `
        <navigation></navigation>
        <login-form></login-form>
    `
})
export class AppComponent { }
