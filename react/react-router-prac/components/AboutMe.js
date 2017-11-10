import React from 'react';

const AboutMe = (props) => {
	// showParams(){
	// 	console.log(props.location.query);
	// }	
		return(
				<div>
					<h1>AboutMe</h1>
					{props.path}
				</div>
				
			);
	
}


export default AboutMe;