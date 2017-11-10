import {Control, ControlGroup} from 'angular2/common';

export class ConfirmPassword{
	static matchPasswords(group: ControlGroup){
		var newPassword = group.find('newPassword');
		var confirmPassword = group.find('confirmPassword');

		if(newPassword.value && confirmPassword.value){
			if(newPassword.value !== confirmPassword.value){
				return {matchPasswords: true}
			}else{
				return null;
			}
		}

		
	}
}