import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
class Main extends React.Component{
	handleSelect(index, last){
		console.log('current index', index, 'last index', index);
	}
	
	render(){
		return(
				<Tabs onSelect={this.handleSelect} selectedIndex={1}>
					<TabList>
						<Tab>Home</Tab>
						<Tab>About</Tab>
						<Tab>Contact</Tab>
					</TabList>

					<TabPanel>
						All about 'Home' content here
					</TabPanel>
					<TabPanel>
						All about 'About' content here
					</TabPanel>
					<TabPanel>
						All about 'Contact' content here
					</TabPanel>

				</Tabs>
			)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));