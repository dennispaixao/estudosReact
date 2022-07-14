import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
     
        }
    }

    render(){
    
        return(<div>Helo</div>)
    }  
}
ReactDOM.render(<App />, document.querySelector("#root"));
