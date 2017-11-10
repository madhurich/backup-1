import {Component} from 'angular2/core';

@Component({
	selector: 'boot-form',
	templateUrl: 'app/form.component.html'
})

export class BootForm{
	log(fName){
		console.log(fName);
	}
	onSubmit(f){
		console.log(f);
	}
}