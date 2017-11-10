import React from 'react';
import ReactDOM from 'react-dom';

export default function example(){
	const element = <div><p>Example template</p></div>
	

		ReactDOM.render(element, document.getElementById('example'));
			
		
}

setTimeout(example, 2000);