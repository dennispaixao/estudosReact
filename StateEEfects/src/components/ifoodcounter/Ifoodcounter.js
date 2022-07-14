
import React ,{ useState, useEffect } from 'react'
 import './Ifoodcounter.css'
 export default function Ifoodcounter() {
  const [quantity, setQuantity] = useState(0);
  const [ total, setTotal] = useState(0);
  const [upStyle, setUpStyle] = useState("button-plus-active")
  const [downStyle, setDownStyle] = useState("button-minus-desactive")
  

    useEffect(()=>{
        setTotal(Number(quantity*2.99).toFixed(2))
    }
    ,[quantity])

  const up = ()=>{
    if(quantity<5){
        setQuantity(quantity+1) 
    }
    if(quantity>=4){
        setUpStyle('button-plus-desactive')
    }

    setDownStyle("button-minus-active");
    
}
const down = ()=>{
    if(quantity<=1){
        setDownStyle("button-minus-desactive");
    }
      if(quantity>0){
        setQuantity(quantity-1)
      }
     setUpStyle("button-plus-active");
  }


    return (
        <>
     <div className="wrapper-quantity">
        <button onClick={down} className={downStyle}> - </button>
        <p>{quantity}</p>
        <button onClick={up} className={upStyle}> + </button>
     </div>
     <div>Total: {total}</div>
      </>
   )
 }
 