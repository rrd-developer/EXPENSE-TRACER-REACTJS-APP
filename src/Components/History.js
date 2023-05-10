import React ,{useContext}from "react"
import { AppContext } from "../App"

function History() {
    const{history} = useContext(AppContext)
    return(
        <div>
            <h3>HISTORY</h3>
             {
                history.map((e,i)=>(
                    <div key={i}>
                       {e.text} {e.amount}
                    </div>
                ))
             }
        </div>
    )
}

export default History;