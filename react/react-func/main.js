import React from 'react';
import ReactDOM from 'react-dom';

function Header(props){
	return <h1>{props.content}</h1>;
}

function Clock(props){
	return (
	<div>
		<h3>clock set up here</h3>
		<h4>{props.nowDate}</h4>
	</div>
		);
}

function tick(){
	const element = 
		<Clock nowDate={new Date().toLocaleTimeString()}/>

		ReactDOM.render(element, document.getElementById('app'));
}
//tick();
let toStop = setInterval(tick, 1000);
setTimeout(() => {
	clearInterval(toStop);
}, 4000);
// function Main(){
// 	return(
// 			<div>
// 				<Header content={'hello hi'}/>
// 				<Header content={'how are you?'}/>
// 				<Header content={'I am good thankyou'}/>
// 			</div>
// 		);
// }

// ReactDOM.render(<Main/>, document.getElementById('app'));
