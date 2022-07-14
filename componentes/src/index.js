import React from "react"
import ReactDOM from 'react-dom'
import Button from './Button'
import ComponentB from "./ComponentB"
import ComponentA from "./ComponentA"

import "./styles.css"

function soma(a,b){
    alert(a+b) ;

}

function App(){
    return (
        <div>
            Hello world
            <Button onClick={()=>soma(10,20)} name='Bruno' />
            <ComponentB>
                <ComponentA>
                <Button onClick={()=>soma(10,20)} name='Bruno' />
                </ComponentA>
            </ComponentB>
        </div>

    )
}

const elem = document.getElementById("root")
ReactDOM.render(<App />, elem)

