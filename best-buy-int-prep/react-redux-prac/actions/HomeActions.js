import axios from 'axios';

var changeContentAfter = () => {
	return (dispatch) => {
		axios.get('http://jsonplaceholder.typicode.com/users').then((res) => {
			return disptach({
				type: '',
				payload: res.data
			});
		});
	};
};

export default changeContentAfter;