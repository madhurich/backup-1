import React from 'react';

const Header = (props) => {
	
		return(
				<div>
				<ul>
					{props.headings.map((elem, index) => 
						<li key={index}>{elem}</li>)}
				</ul>
				<p onClick={props.changeHeader}>change header</p>
				</div>
			)

}

export default Header;