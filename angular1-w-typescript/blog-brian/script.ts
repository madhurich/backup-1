    interface IHero{
        id: number;
        name: string;
    }
    const HEROS: IHero[] =  [
                        {name: 'mad', id: 1},
                        {name: 'man', id: 2},
                        {name: 'dad', id: 3},
                        {name: 'mom', id: 4}
                    ];

    class HerosComponentController implements ng.IComponentController{
        public heros: IHero[];
        constructor(){
           
        }
        public $onInit(){
            this.heros = HEROS;
        }
    }

    class HerosComponent implements ng.IComponentOptions{
        public controller: any;
        public template: string;

        constructor(){
            this.controller = HerosComponentController;
            this.template = `
                    <ul>
                        <li ng-repeat="user in $ctrl.heros">{{user.name}}</li>
                    </ul>
                `;
        }
    }
    
    angular.module('myApp', []);
    
    angular.module('myApp')
            .component('heros', new HerosComponent());
          
