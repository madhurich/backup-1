import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Header from './containers/Header';
import Home from './containers/Home';
import store from './store';


class Main extends React.Component{
	render(){
		
		return(
				<div>
					<Header/>
					<Home />
				</div>
			)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Main/>
	</Provider>, 
	document.getElementById('app'));