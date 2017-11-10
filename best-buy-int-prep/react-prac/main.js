import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';

class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			initialContent: 'home content'
		};
	}

	changeHome(){
		this.setState({
			initialContent: 'changed home content'
		});
	}

	componentWillMount(){
		console.log('mounted');
	}
	componentDidMount(){
		console.log('un-mounted');
	}
	componentWillReceiveProps(){}
	shouldComponentUpdate(nextState, nextProps){}
	componentWillUpdate(nextState, nextProps){}
	componentDidUpdate(prevState, prevProps){}
	componentWillUnmount(){}
	render(){
		return (
				<div>
					<Home content={this.state.initialContent} 
					changeHomeContent={this.changeHome.bind(this)}
					/>
					<About/>
				</div>
			)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));