const headerState = {
	headings: ['home', 'about', 'contact']
};



const HeaderReducer = (state = headerState, action) => {
	switch(action.type){
		case 'CHANGE_HEADER': 
			state = Object.assign({}, state, {
				headings: action.payload
			});
	}
	console.log('redcuer 2 executed')
	return state;
};

export default HeaderReducer;