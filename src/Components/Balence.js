import React,{useContext} from "react";
import { AppContext } from "../App";


function Balence () {
    const {balence,income,expense} = useContext(AppContext);
    return(
        <div>
        <div>
            <h2>YOUR BALENCE: RS -{balence}</h2>
        </div>
        <div>
            <h2>YOUR INCOME: RS -{income}</h2>
        </div>
        <div>
            <h2>YOUR EXPENSE: RS -{expense}</h2>
        </div>
        </div>
    )

}

export default Balence;