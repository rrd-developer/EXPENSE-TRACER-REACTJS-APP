import React,{useContext} from "react";
import { AppContext } from "../App";


function Transcation(){
    const{text,setText,amount,setAmount,handleSubmit} = useContext(AppContext)
    return(
        <div>
            <h3>ADD TRANSCATION</h3>
            <div><h3>text</h3><input type="text" placeholder="Enter your Text" value={text} onChange={e =>setText(e.target.value)}/></div>
           <div><h3>Amount<br/>[negative - expense,positive - income]</h3><input type="amount" placeholder="Enter your Amount" value={amount} onChange={e =>setAmount(e.target.value)}/></div>
            <div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default Transcation;