import {Control} from 'angular2/common';

export class UsernameValidators{
	
	static shouldBeUnique(control: Control){
		var usernames = ['mad', 'man', 'dad'];
		var count = 0;
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				for(var i = 0; i < usernames.length; i++){
					if(control.value == usernames[i]){//if the etered value matches any of the array elements increment the count
						count++;
					}
				}
				if(count){//if count is populated then the name is found in the array it means it is not unique, so make the error appear on the screen set the 'shouldBeUnique' value to be 'true'
					resolve({shouldBeUnique : true});
				}else{
					resolve(null);
				}
			}, 3000);
			
		});
	}
	static cannotContainSpace(control: Control){
		if(control.value.indexOf(' ') != -1)
			return {cannotContainSpace: true}
		
		return null;
	}
}