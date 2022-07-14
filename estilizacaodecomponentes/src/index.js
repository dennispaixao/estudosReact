import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import "./styles.css"
import styled from 'styled-components'

const estilo = {
    backgroundColor:"blue",
}

const DivStyle = styled.div`
    color:blue;
    background: ${props => props.bg};
`;
class App extends Component{
    constructor(props){
        super(props);
        this.state ={
     
        }
    }
    render(){
    
        return(
        <div style={estilo}>
            Hello <span style={{color:'red'}}>world</span>
            <DivStyle bg={'yellow'}> Hello Yellow</DivStyle>   
        </div>)
    }  
}
ReactDOM.render(<App />, document.querySelector("#root"));
