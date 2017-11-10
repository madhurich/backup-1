import React from 'react';
import {Link} from 'react-router';

const Header = (props) => {
	
		return(
				<div>
					<ul>
						<li><Link to={'/home'}>Home</Link></li>
						<li><Link to={'/about'}>About</Link></li>
						<li>Contact</li>
					</ul>
				</div>
			)

}

export default Header;