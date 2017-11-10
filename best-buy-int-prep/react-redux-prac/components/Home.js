import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component{
	render(){
		return(
				<div>
					<p onClick={this.props.changeContent}>
					<strong>Content </strong>{this.props.homeContent}</p>
					{this.props.children}	
				</div>
				
			)
	}
}



export default Home;
//container component