import React from 'react';

const Home = (props) => {
	let changePara = () => {
		//this.props.paraContent = 'new content';
		alert(props.paraContent);
	};	
	

	
		return(
				<div>
					<h1>Home Component</h1>
					<p onClick={props.changeContent}>
					{props.content}</p>
					<p onClick={() => changePara()}>
					<strong>{props.paraContent}</strong></p>
				</div>
				
			);
	
}

Home.propTypes = {
	content: React.PropTypes.string.isRequired
};

Home.defaultProps = {
	content: 'default content'
}
export default Home;