const homeState = {
	content: 'home content',
	paraContent: 'old content',
	data: 'before axios call'
	
};

const HomeReducer = (state = homeState, action) => {
	switch(action.type){
		case 'CHANGE_CONTENT':
			state = Object.assign({}, state, {
				content: action.payload
			});
		break;
		
		case 'CHANGE_PARA':
			state = Object.assign({}, state, {
				paraContent: 'new para content'
			});
		break;	

		case 'GOT_DATA':
			state = Object.assign({}, state, {
				data: action.payload[0]
			});	
			break;
	}
	console.log('redcuer 1 executed');
	return state;
};

export default HomeReducer;