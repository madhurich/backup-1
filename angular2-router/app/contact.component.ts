import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
	constructor(private _router: Router){

	}
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);

    }

    routerCanDeactivate(next, prop){
    	console.log('next', next);
    	console.log('prop', prop);
    	return confirm('are you sure?');
    }
}