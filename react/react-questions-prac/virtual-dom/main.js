import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class Main extends React.Component{

	logHere(){
		console.log(Main);
		console.log(<Main/>);
	}
	render(){
		
		return(
				<div>
					<h1>ES6 component</h1>
					<button onClick={this.logHere}>log</button>
				</div>
			)
	}

}

ReactDOM.render(<Main name={'madhuri'} age={23}/>, document.getElementById('app'));