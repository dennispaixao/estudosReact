import React from 'react'
import  ReactDOM  from 'react-dom'
import "./styles.css"

function soma(a,b){
    return a+b;
}

function primeiroJSX(){
    return(
        <div className='green'>Olá sou o primeiro JSX
        <h1>Resultado:{soma(10,20)}</h1>
        </div>
        )
}


const App = () =>{
    return (
        <div className="App">
            Hello World;
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);