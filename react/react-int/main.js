import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(p){
        super(p);
        this.state = {
            items: Array(5).fill(1).map((x,i) => ({id:i}))
        };
    }
    getInput(){
        console.log(this.refs.refName.value);
    }
    getOneMore(){
        console.log(this.anotherRef.value);
    }

    // componentDidMount(){
    //     const random = (a,b) => Math.random() < .5 ? -1 : 1;

    //     setInterval(() => {
    //         this.setState({
    //             items: this.state.items.sort(random)
    //         });
    //     }, 1000);
    // }

    componentDidMount(){
        this.refs.refName.focus();
    }

    render() {
        let {items} = this.state;
        return( 
        <div>
                <ul>
                {items.map(item =>
                    <li key={item.id}>{item.id}</li>)}
                </ul>
                <input ref={'refName'} type="text"/>
                <button onClick={this.getInput.bind(this)}>
                get input</button><br/>
                <input type="text" ref={(input) => {this.anotherRef = input;}}/>
                <button onClick={this.getOneMore.bind(this)}>
                get input by other method</button>
        </div>  
        )   
    }
}

ReactDOM.render(<List />, document.getElementById('app'));