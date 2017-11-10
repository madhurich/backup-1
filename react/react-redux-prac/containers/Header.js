import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component{
	
	render(){
		return(
				<div>
				<ul>
					{this.props.headings.headings.map((elem, index) => 
						<li key={index}>{elem}</li>)}
				</ul>
				<p onClick={this.props.changeHeader}>change header (click me to change header)</p>
				</div>
			)
	}

}

const mapStateToProps = (state) => {
	return {
		headings: state.HeaderReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeHeader: () => {
			dispatch({
				type: 'CHANGE_HEADER',
				payload:  ['home changed', 'about changed', 'contact changed']
			});
		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);