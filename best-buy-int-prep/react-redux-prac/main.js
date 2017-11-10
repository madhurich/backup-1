import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import {Provider} from 'react-redux';
import App from './components/App';

class Main extends React.Component{
	render(){
		return(
				<div>
					<App/>
				</div>
			)
	}
}





ReactDOM.render(
	<Provider store={store}><Main/></Provider>, 
	document.getElementById('app'));