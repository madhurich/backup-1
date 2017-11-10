describe('all about usersController', function(){
	var $controller, UsersController, userFactory;
	var usersList =  [
				{
					id: 1,
					name: 'mad',
					age: 22
				}, {

					id: 2,
					name: 'man',
					age: 24
				}
			];

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('components.user'));
	beforeEach(angular.mock.module('services.users'));

	beforeEach(inject(function(_$controller_, _Users_){
		$controller = _$controller_;
		userFactory = _Users_;

		spyOn(userFactory, 'all').and.callFake(function(){
			return usersList;
		});
		UsersController = $controller('usersController', {Users: userFactory});
	}));

	

	it('existence of usersController', function(){
		expect(UsersController).toBeDefined();
	});

	it('all() method', function(){
		expect(userFactory.all).toHaveBeenCalled();
		expect(UsersController.users).toEqual(usersList);
	});
});