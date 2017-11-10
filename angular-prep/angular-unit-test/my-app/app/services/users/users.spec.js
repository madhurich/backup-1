describe('users factory', function(){
	// it('has an adder to add 3 + 3', function(){
	// 	expect(3 + 3).toBe(6);
	// });
	var Users;
	var usersList = [
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

	var singleUser = {
			id: 1,
			name: 'mad',
			age: 22
	};
	beforeEach(angular.mock.module('services.users'));

	beforeEach(inject(function(_Users_){
		Users = _Users_;
	}));

	it('users service must exist', function(){
		expect(Users).toBeDefined();
	});

	describe('.all() method existence', function(){
		it('must exist', function(){
			expect(Users.all).toBeDefined();
		});

		// it('must return all users', function(){
		// 	expect(Users.all()).toBe(usersList);
		// });
	});

	describe('findById() method existence', function(){
		it('must be defined', function(){
			expect(Users.findById).toBeDefined();
		});
		it('must give single user by id', function(){
			expect(Users.findById(1)).toEqual(singleUser);
		});

	});
});