
import './App.css';
import{useState,useContext, createContext} from "react"
import Header from "./Components/Header"
import History from "./Components/History"
import Balence from "./Components/Balence"
import Transcation from './Components/Transcation';
export const AppContext = createContext(null);


const expanseArray = [],incomeArray = [];
const reducer = (acc,curr) => acc+ curr;

function App() {
  const [balence,setBalence] = useState(0);
  const [income,setIncome] = useState(0);
  const[expense,setExpense] = useState(0);
  const[history,setHistory] = useState([]);
  const[text,setText] = useState();
  const[amount,setAmount] = useState(0);

  const handleSubmit = () =>{
       let intAmount = parseInt(amount);
       if(text === "" || amount === ""){
        alert("INVALID")
        return;
       }

       if(intAmount > 0){
        setBalence(intAmount + balence)
        incomeArray.push(intAmount);
        setIncome(incomeArray.reduce(reducer))
       }
       else{
        setBalence(balence + intAmount)
        expanseArray.push(intAmount);
        setExpense(-(expanseArray.reduce(reducer)))
       }

       setHistory([...history,{text:text,amount:amount}])
       setText("");setAmount("")
  }
  
  return (
    <div className="App">
      <AppContext.Provider value={{balence,income,expense,history,text,amount,setText,setAmount,handleSubmit}}>
      <Header/>
      <br/>
      <hr/>
      <History/>
      <br/>
      <hr/>
      <Transcation/>
      <br/>
      <hr/>
      <Balence/>
      <br/>
      <hr/>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
