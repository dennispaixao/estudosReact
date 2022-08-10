import React, {useState} from 'react'
import { useAuth } from '../../providers/auth'

export default function Login() {
const [input, setInput] = useState("");
const {setUser} = useAuth();

const handdleLogin = ()=>{
const user = input
localStorage.setItem("user", JSON.stringify(input))
setUser(user)

}
  return (

    <div>
        <input onChange={(e)=> setInput({name: e.target.value})}/>
        <button onClick={handdleLogin}>Login</button>
     
    </div>
     
  )
}
