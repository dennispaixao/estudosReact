import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './styles.css';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            clock: 1000,
            copo: 'agua'
        }
    }

    componentDidMount(){
        window.setTimeout(()=>{
            this.setState({copo:"suco"})
        },2000)
    }
    alterarCopo = function(){
        this.setState({copo:'refrigerante'})
    }


    render(){
        const { clock }= this.state;
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={()=>this.alterarCopo()}>{this.state.copo}</button>

            </div>

        )


    }
}



const root = document.getElementById("root");
ReactDOM.render(<App/ >, root);