import React from "react"
import { useAuth } from "../../providers/auth"

export default function Outro(){
   const {user} = useAuth();
   
    return (
        <div >
            {user.name}
        </div>
    )

}