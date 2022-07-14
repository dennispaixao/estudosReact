import { useState } from "react";

export default function () {
    const [qt, setQt] = useState(1);

    return (
        <>
            <div>Contador: {qt}</div>
            <button onClick={()=>setQt(qt+1)}>incrementar</button>
        
        </>

    )



}