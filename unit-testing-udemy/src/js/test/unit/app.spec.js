describe('testing myApp', function(){
	beforeEach(module('myApp'));
	describe('testing myCtrl', function(){
		var ctrl;
		var scope;
		var httpBackend;
		beforeEach(inject(function($controller, $rootScope, $httpBackend){
			scope = $rootScope.$new();
			ctrl = $controller('myCtrl', {$scope:scope});
			httpBackend = $httpBackend;
		}));

		//afterEach(inject(function))

		it('should have addDestination', function(){
			expect(ctrl.addDestination).toBeDefined();
			ctrl.city = "denton";
			ctrl.state = 'Texas';
			id = 0;

			ctrl.addDestination();
			expect(ctrl.destinations.length).toBe(1);
			expect(ctrl.destinations[0].city).toBe('denton');
			expect(ctrl.destinations[0].id).toBe(1);

			ctrl.city = "killer";
			ctrl.state = 'M';
			ctrl.addDestination();
			expect(ctrl.destinations.length).toBe(2);
			//checking if still the first object is same or not
			expect(ctrl.destinations[0].city).toBe('denton');	
			expect(ctrl.destinations[1].id).toBe(2);
			expect(ctrl.destinations.length).toBe(2);		
		});

		it('should have remove', function(){
			//here we are attaching this array od objects to the ctrl
			ctrl.destinations = [
				{
					city: 'city1',
					state: 'state1',
					id: 1
				},
				{
					city: 'city2',
					state: 'state2',
					id: 2
				}
			];
			expect(ctrl.remove).toBeDefined();
			expect(ctrl.destinations.length).toBe(2);
			ctrl.remove(1);

			expect(ctrl.destinations.length).toBe(1);
			expect(ctrl.destinations[0].city).toBe('city2');

		});

		it('should add posts', function(){
			ctrl.posts = [];

			httpBackend.expectGET('https://jsonplaceholder.typicode.com/posts').respond([{
				body: "quia et suscipit↵suscipit recusandae consequuntur expedita et",
				id:1,
				title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				userId: 1
			}]);
			
			ctrl.getPosts();
			httpBackend.flush();
			expect(ctrl.posts[0]).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
		});

	});
});