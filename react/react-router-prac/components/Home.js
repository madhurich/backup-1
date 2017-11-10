import React from 'react';

class Home extends React.Component{

	componentWillMount(){
		console.log('home is going to mount');
	}
	componentDidMount(){
		console.log('home is mounted');
	}
	componentWillReceiveProps(){}
	componentDidReceiveProps(){}
	shouldComponentUpdate(nextState, nextProps){}
	componentWillUpdate(nextState, nextProps){}
	componentDidUpdate(prevState, prevProps){}
	
	componentWillUnmount(){
		console.log('home is going to unmount');
	}

	render(){	
		return(
				<div>
					<h1>Home Component</h1>
				</div>
				
			);
	}
}


export default Home;