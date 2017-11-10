import React from 'react';
import {Link} from 'react-router';

const About = (props) => {	
		return(
				<div>
					<h1>About Component</h1>
					<ul>
						<li><Link to={'/aboutme'}>About Me</Link></li>
						<li><Link to={'/aboutfriend/Madhuri/23'}>About Friend</Link></li>
						
					</ul>
					<p><strong>Name: {props.name}</strong></p>
					{props.children}
				</div>
				
			);
	
}


export default About;