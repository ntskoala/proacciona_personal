import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {LoginService} from './login.service';

@Component({
    selector: 'login-form',
    templateUrl: 'public/assets/templates/login-form.component.html',
    styleUrls: ['public/assets/css/login-form.component.css'],
    providers: [LoginService]
})
export class LoginFormComponent {
    // injection of LoginService as a property
    constructor(private loginService: LoginService) {};

    active = true;
    response: Object;
    validate: boolean;

    getUsers() {
        this.loginService.getUsers().subscribe(
            data => console.log(data)
        )
    }

    onSubmit(user, password) {
        this.active = false;
        setTimeout(() => this.active = true, 0);

        let logingUser = new User(user, password);
        this.loginService.logUser(logingUser).subscribe(
            (data) => {
                this.response = JSON.stringify(data);
                this.validate = data.validate;
            }
        )

    }

}
