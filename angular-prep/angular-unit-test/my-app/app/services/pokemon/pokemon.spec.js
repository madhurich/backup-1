describe('pokemon factory', function(){
	var pokemon;

	beforeEach(angular.mock.module('services.pokemon'));
	beforeEach(inject(function(_Pokemon_){
		pokemon = _Pokemon_;
	}));

	it('existance of pokemon service', function(){
		expect(pokemon).toBeDefined();
	});
});
//884894787
//164521389