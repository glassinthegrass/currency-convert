import React, {  Fragment, useState } from "react";
import { useAxios } from "./hooks/useAxios";
import "./App.modules.css";
import NumberPad from "./Components/NumberPad";
import Selection from "./Components/Selection";
import Exchange from "./Components/Exchange";
import Expense from './Components/Expense';

const App = () => {

  const [from, setFrom] = useState({
    symbol: "",
    denomination: "Select a currency",
    rate: 0,
  });
  const [to, setTo] = useState({
    symbol: "",
    denomination: "Select a currency",
    rate: 0,
  });
  const [{ loading, response, error }, refresh] = useAxios({
    method: "get",
    url: `/api/currency?from=${from?.symbol}`,
  });
  const [toToggle, setToToggle] = useState(false);
  const [fromToggle, setFromToggle] = useState(false);
  const [amount, setAmount] = useState("");
  const [expenses,setExpenses]=useState([]);
  const [item,setItem]=useState('')
  const handleFromToggle = () => {
    setFromToggle(!fromToggle);
  };
  const handleToToggle = () => {
    setToToggle(!toToggle);
  };
  const handleFrom = (from) => {
    setFrom(from);
  };
  const handleTo = (to) => {
    setTo(to);
  };
  const handleAmount = (data) => {
    switch (data) {
      case "reset":
        setFrom({ symbol: "", denomination: "Select a currency", rate: 0 });
        setTo({ symbol: "", denomination: "Select a currency", rate: 0 });
        setToToggle(false);
        setFromToggle(false);
        setAmount("");
        setExpenses([])
        setItem('')
        break;
      case "clear":
        setAmount("");
        setItem('')
        setToToggle(false);
        setFromToggle(false);
        break;
      case "enter":
        setAmount("");
        setItem('')
        break;
      default:
        setAmount(amount.toString() + data);
        break;
    }
  };
  const handleExpense=()=>{
let exp=expenses.slice()
exp.push(`${amount}-${from.symbol} / ${(+amount * +to.rate).toFixed(2)}-${to.symbol} for ${item}`)
setAmount('')
setExpenses(exp);
setItem('');
  }
  const handleItem=(e)=>{
    setItem(e)
  }
  const conversion =
    amount !== "" && from.symbol !== "" && to.symbol !== "" ? (
      <Fragment>
      <div className="exchangeContainer row">
        <Exchange selected={from.symbol} amount={+amount} />
        <Exchange selected={to.symbol} amount={+amount * to.rate} />
      </div>
      <div className='rateBox'>{`today's exchange rate: x${to.rate}`}</div>
      </Fragment>
    ) : (
      <div className="exchangeContainer row">conversion amounts show here</div>
    );
    const mapExpense =expenses.map((exp,i)=>{
      return <Expense expense={exp} key={i}/>
     })
     const display=loading?<h1>Currency-Convert</h1>:<Fragment><header>
     <h1>Currency-Convert</h1>
   </header>

   <div className="jumbo">
     <section className="column">
       <Selection
         title="from"
         selection={response}
         selected={from}
         handleSelect={handleFrom}
         handleToggle={handleFromToggle}
         toggle={fromToggle}
       />
       <Selection
         title="to"
         selection={response}
         selected={to}
         handleSelect={handleTo}
         handleToggle={handleToToggle}
         toggle={toToggle}
       />
       {conversion}
     </section>
     {error}
     <NumberPad item={item} handleItem={handleItem} handleExpense={handleExpense} handle={handleAmount} />
       <div className='expenseBox'>
{mapExpense}
   </div>  
   </div>    
</Fragment>

  return (
    <main className="App">
      {display}
    </main>
  );
};
export default App;
