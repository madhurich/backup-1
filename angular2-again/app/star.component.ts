import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'star',
	templateUrl: 'app/star.template.html'
})
export class StarComponent{
	@Input() isActive = false;
	@Output() mad = new EventEmitter();
	onClick(){
		//alert();
		this.isActive = !this.isActive;
		this.mad.emit({newVal: 'mad'});
	}
	

}