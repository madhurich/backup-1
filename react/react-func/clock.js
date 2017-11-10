import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentWillMount(){
		clearInterval(this.clockSetup);
	}
	componentDidMount(){
		console.log('run interval');
		this.clockSetup = 
			setInterval(() => {
				this.runClock();
			}, 1000);
		
	}
	runClock(){
		this.setState({
			date: new Date()
		});
	}
	render(){
		return(
				<div>
					<h3>clock set up here</h3>
					<h4>{this.state.date.toLocaleTimeString()}</h4>
				</div>
			);
	}
};

ReactDOM.render(<Clock/>, document.getElementById('app'));