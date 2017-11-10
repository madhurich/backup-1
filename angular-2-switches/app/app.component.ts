import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {SwitchComponent} from './switch.component';
import {BootstrapPanel} from './bsPanel.component';
import {ZippyComponent} from './zippy.component';
import {ZippySolComponent} from './zippySol.component';
import {DatePicker} from './date.component';
import {ContactListComponent} from './contact-list.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>My First Angular 2 App</h1>
        <hr>
         <contact-list></contact-list>
        <hr>
        <date-picker></date-picker>
    	<hr>
    	<zippy>
            <div class="head">head1</div>
            <div class="body">body1</div>
        </zippy>
        <zippy>
            <div class="head">head2</div>
            <div class="body">body2</div>
        </zippy> 
        <zippy-sol title="title 1">
            body1 of title1
        </zippy-sol>       
    	<hr>
        <date-picker></date-picker>
		<bs-panel>
			<div class="heading-here">heading over here</div>
			<div class="body-here">body over here</div>
		</bs-panel>
		<courses></courses>
		<switch></switch>

    	`,
    directives: [CoursesComponent, SwitchComponent, BootstrapPanel, ZippyComponent, 
    ZippySolComponent, DatePicker, ContactListComponent]	
})
export class AppComponent { }