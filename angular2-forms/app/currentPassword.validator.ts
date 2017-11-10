import {Control} from 'angular2/common';

export class currentPasswordValidators{
	static checkOldPassword(control: Control){
		if(control.value != 1234){
			return {checkOldPassword: true};
		}else{
			return null;
		}
	}
}