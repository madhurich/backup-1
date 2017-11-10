import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			content: 'all about home component here',
			headings: ['home', 'about', 'contact']
		};
	}

	changeContent(){
		this.setState({
			content: 'content changed'
		});
	}

	changeHeader(){
		this.setState({
			headings: ['home changed', 'about changed', 'contact changed']
		});
	}

	componentWillMount(){
		console.log('main will mount');
		
	}
	componentDidMount(){
		setTimeout(() => {
			console.log('main did mount');
		}, 3000);
	}
	componentWillReceiveProps(){
		console.log('main will receive props');
	}

	shouldComponentUpdate(nextProp, nextState){
		console.log('main will mount');
		return true; //this must return true to
		//execute the next method in the process
	}
	componentWillUpdate(nextProp, nextState){

	}
	componentDidUpdate(prevProp, prevState){

	}
	componentWillUnmount(){

	}

	render(){
		
		return(
				<div>
					<Header headings={this.state.headings}
					changeHeader={this.changeHeader.bind(this)}/>
					<Home content={this.state.content} 
					changeContent={this.changeContent.bind(this)}
					paraContent={'old content'}/>
				</div>
			)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));