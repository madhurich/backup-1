

interface IComponentController{
	textBindings: any;
	dataBindings: any;
	functionBindings:()=> any;
}

interface addIComponentController extends IComponentController{
	add(): any;
}
class SomeComponentController implements addIComponentController{
	textBindings: any;
	dataBindings: any;
	functionBindings:()=> any;
	
	constructor(){
		this.textBindings = '';
		this.dataBindings = 0;
	}

	add(): void{
		this.functionBindings = () => {
			this.dataBindings++;
		};
	}

}

interface ISomeComponent{
	template?: string;
	controller?: any;
	bindings?: any;
	transclude?: any; 
}

class SomeComponent implements ISomeComponent{
	public template: string;
	public controller: any;
	public bindings: any;

	constructor(){
		this.bindings = {
			textBindings: '@',
			dataBindings: '<',
			functionBindings: '&'
		};

		this.template = `
			<div>text-bindings {{$ctrl.textBindings}}</div>
			<div>{{$ctrl.dataBindings}}</div>
			<button ng-click="$ctrl.add()">click</button>
		`;
		this.controller = SomeComponentController;

	}
}

angular.module('myApp', []);

angular.module('myApp')
		.component('someComp', new SomeComponent());