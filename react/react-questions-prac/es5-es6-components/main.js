var React = require('react');
var ReactDOM = require('react-dom');
var ReactPropTypes = React.PropTypes;

var Main = React.createClass({
	displayName: 'Main',

	getInitialState: function(){
		return {
			name: 'madhuri'
		}
	},

	// propTypes: {
	// 	name: ReactPropTypes.string
	// },//not working?? check later

	getDefaultProps: function(){
		return {
			age: 1000
		}
	},

	changeName: function(){
		this.setState({
			name: 'name is changed'
		});
	},

	render: function(){
		return(
				<div>
					<h1>Es5 component</h1>
				{/*here you dont need to bind the 'this' of changeName method in ES5*/}
					<p onClick={this.changeName}><strong>Name: </strong>
					{this.state.name}(click me to change my name)</p>
					<p><strong>Age: </strong>
					{this.props.age}</p>
				</div>
			);
	}
});

ReactDOM.render(<Main/>, document.getElementById('app'));




