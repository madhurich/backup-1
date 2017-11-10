import {Component} from 'angular2/core';
import {BootForm} from './form.component';
import {SubForm} from './sub-form.component';
import {SignUp} from './signup-form.component';
import {PasswordForm} from './password-form.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>My First Angular 2 App</h1>
    	<password-form></password-form>
		<boot-form></boot-form>
		<sub-form></sub-form>
		<sign-up></sign-up>
    	`,
    directives: [BootForm, SubForm, SignUp, PasswordForm]
})
export class AppComponent { }