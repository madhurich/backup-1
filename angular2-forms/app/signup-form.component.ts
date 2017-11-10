import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './username.validators';

@Component({
	selector: 'sign-up',
	templateUrl: 'app/signup-form.component.html'
})

export class SignUp{
	form: ControlGroup;
	constructor(fb: FormBuilder){
		this.form = fb.group({
			username: ['', 
				Validators.compose([Validators.required, 
				UsernameValidators.cannotContainSpace]), 
				UsernameValidators.shouldBeUnique],
			password: ['', Validators.required]
		});
	}
	// form = new ControlGroup({
	// 	username: new Control('', Validators.required),
	// 	password: new Control('', Validators.required)
	// });

	onSubmit(){
		console.log(this.form);
		this.form.find('username').setErrors({
			invalidLogin : true
		});
	}
	onInputChange(username){
		console.log(username);
	}
}