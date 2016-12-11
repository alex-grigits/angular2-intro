import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.css']
})

export class LoginFormComponent {
    fadeIn = false;
    onModal(){
        return this.fadeIn = !this.fadeIn;        
    }

    user = {
        'email': '',
        'password': ''
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
    }
}