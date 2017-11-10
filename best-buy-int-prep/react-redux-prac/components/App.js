import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Home from './Home';
import changeContentAfter from '../actions/HomeActions';

class App extends React.Component{
	render(){
		return(
				<div>
					<h1>Hello</h1>
					<Home changeContent={this.props.changeHome} 
					homeContent={this.props.contentHere.content.name}>
						{this.props.contentHere.content.name}
					</Home>	
				</div>
				
			)
	}
}

const mapStateToProps = (state) => {
	return {
		contentHere: state.HomeReducer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeHome: () => {
			return dispatch(changeContentAfter());
		}
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//container component