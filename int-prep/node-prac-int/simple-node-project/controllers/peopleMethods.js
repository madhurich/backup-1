exports.getPeople = function(req, res){
	res.send([
		{
			id: 1,
			name: 'mad',
			age: 22
		},
		{
			id: 2,
			name: 'man',
			age: 24
		},
		{
			id: 3,
			name: 'dad',
			age: 1000
		},
		{
			id: 4,
			name: 'mom',
			age: 1000
		}
	]);
};

exports.getPeopleById = function(req, res){

};