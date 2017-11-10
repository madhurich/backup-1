import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Home extends React.Component{
	// let changePara = () => {
	// 	//this.props.paraContent = 'new content';
	// 	alert(props.paraContent);
	// };	
	

	render(){
		return(
				<div>
					<h1>Home Component</h1>
					<p onClick={this.props.changeContent}>
					{this.props.homeInfo.content} (click here to change this content)</p>
					<p onClick={() => this.props.changePara()}>
					<strong>{this.props.homeInfo.paraContent} (click here to change this bold text)</strong></p>
					<h3>server data here</h3>
					<p onClick={this.props.getData}>{this.props.homeInfo.data.name}(click me to get data)</p>
				</div>
				
			);
	}
	
}

// Home.propTypes = {
// 	content: React.PropTypes.string.isRequired
// };

Home.defaultProps = {
	homeInfo: {
		content: 'default content'
	}
}

const mapStateToProps = (state) => {
	return {
		homeInfo: state.HomeReducer
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeContent: () => {
			dispatch({
				type: 'CHANGE_CONTENT',
				payload: 'content is changed'
			})
		},
		changePara: () => {
			dispatch({
				type: 'CHANGE_PARA',
				payload: 'new para content'
			})
		},
		getData: () => {
			dispatch((dispatch) => {
				alert('before dispatching');
				axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((res) => {
					return dispatch({
						type: 'GOT_DATA',
						payload: res.data
					});
				});
			});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);