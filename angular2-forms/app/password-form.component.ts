import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators, Control} from 'angular2/common';
import {currentPasswordValidators} from './currentPassword.validator';
import {newPasswordValidators} from './newPassword.validators';
import {ConfirmPassword} from './confirmPassword.validators';

@Component({
	selector: 'password-form',
	templateUrl: 'app/password-form.component.html'
})

export class PasswordForm{
	form: ControlGroup;
	constructor(fb: FormBuilder){
		this.form = fb.group({
			currentPassword: ['', Validators.required],
			newPassword: ['', Validators.compose([Validators.required,
							newPasswordValidators.checkNewPasswordLength])],
			confirmPassword: ['', Validators.required]
											
		}, {validator: ConfirmPassword.matchPasswords});
	}

	onSubmit(){
		console.log(this.form.controls.currentPassword.value);
		if(this.form.controls.currentPassword.value != 1234){
			this.form.find('currentPassword').setErrors({
				checkOldPassword: true
			});
		}else{
			alert('password is successfully changed');
		}
	}
}