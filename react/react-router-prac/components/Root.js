import React from 'react';
import Header from './Header';

class Root extends React.Component{

	render(){
		return(
				<div>
					<Header/>
					{this.props.children}
				</div>

			)
	}
}

export default Root;