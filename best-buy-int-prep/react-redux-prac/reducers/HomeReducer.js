const homeState = {
	content: 'initial content of home'
};
const HomeReducer = (state=homeState, action) => {
	switch(action.type){
		case 'CHANGE_CONTENT':
			state = Object.assign({}, state, {
				content: action.payload[0]
			});
			break;
	}
	return state;
};

export default HomeReducer;