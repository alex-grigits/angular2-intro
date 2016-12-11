import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.css']
})

export class RegisterFormComponent {
    regForm: FormGroup;
    genders = [
        'male',
        'female'
    ]
    constructor () {
        this.regForm = new FormGroup({
            'userData': new FormGroup({
                'fname': new FormControl('', Validators.required),
                'lname': new FormControl('', Validators.required),
                'email': new FormControl('', [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ])
            }),
            'password': new FormControl('', Validators.required),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([
                new FormControl('Football', Validators.required)
            ])
        })
    }

    onAddHobby() {
        (<FormArray>this.regForm.controls['hobbies']).push(new FormControl('', Validators.required))   
    }

    onSubmit() {
        console.log(this.regForm);
    }
}