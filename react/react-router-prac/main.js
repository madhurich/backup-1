import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import AboutMe from './components/AboutMe';
import AboutFriend from './components/AboutFriend';
class Main extends React.Component{
	render(){
		
		return(
				<Router history={browserHistory}>
					<Route path={'/'} component={Root}>
						<IndexRoute component={Home}/>
						<Route path={'home'} component={Home}/>
						<Route path={'about'} handler={(props, state) => <About name={'mad killer'}/>}/>
						<Route component={About}>
							<Route path={'aboutme'} component={AboutMe}/>
							<Route path={'aboutfriend/:name/:age'} component={AboutFriend}/>
						</Route>
					</Route>
					
				</Router>
			)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));