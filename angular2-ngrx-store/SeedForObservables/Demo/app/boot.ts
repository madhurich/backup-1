import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {provideStore} from '@ngrx/store';
import {counterReducer} from './counter';

bootstrap(AppComponent, [
		provideStore({counter: counterReducer})
	]).then(() => console.log('app is running'),
			err => console.log(err));