import {Component} from 'angular2/core';

@Component({
	selector: 'sub-form',
	templateUrl: 'app/sub-form.component.html'
})

export class SubForm{
	onSubmit(f){
		console.log(f);
	}
}