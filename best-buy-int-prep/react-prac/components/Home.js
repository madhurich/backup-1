import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component{
	render(){
		return(
				<div>
					<h1>home Component</h1>
					<p onClick={this.props.changeHomeContent}>
					<strong>content</strong>{this.props.content}</p>
					<p><strong>Default props check </strong>{this.props.someContent}</p>	
				</div>
				
			)
	}
}

Home.propTypes = {
	content: React.PropTypes.string
}

Home.defaultProps = {
	someContent: 'default content'
}

export default Home;
//container component