import {Control} from 'angular2/common';

export class newPasswordValidators{
	static checkNewPasswordLength(control: Control){
		if(control.value.length <= 3){
			return {checkNewPasswordLength: 4};
		}else{
			return null;
		}
	}
}