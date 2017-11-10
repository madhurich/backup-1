import React from 'react';

class AboutFriend extends React.Component{

	componentWillMount(){
	
	}

	componentDidMount(){
		
	}

	componentWillReceiveProps(){
		console.log('component receives props');
	}
	componentDidReceiveProps(){
		console.log('it received props');
	}
	shouldComponentUpdate(nextState, nextProps){
		console.log(nextState, nextProps);
		return false;
	}
	componentWillUpdate(nextState, nextProps){}
	componentDidUpdate(prevState, prevProps){}	
		
	render(){	
		return(
				<div>
					<h1>AboutFriend</h1>
					<p><strong>Name: </strong>{this.props.params.name}</p>
					<p><strong>Age: </strong>{this.props.params.age}</p>
				</div>
				
			);
	}	
}


export default AboutFriend;