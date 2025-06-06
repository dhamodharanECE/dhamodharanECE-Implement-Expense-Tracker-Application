import './App.css'
import React, { useState } from 'react'
import { FirstContext, SecondContext } from './Context';
import Header from './Header/Header';
import { Datasheet } from './Datasheet';
import TranscationsChart from './TranscationsChart/TranscationsChart';



const App = () => {
  const [money, setMoney] = useState({
      balance: 3800, 
      expense: 1200
  });
  const [transactionData, setTransactionData] = useState(Datasheet);

  const value = JSON.stringify(money);
  const data = JSON.stringify(transactionData);
  localStorage.setItem("Add Income", value);
  localStorage.setItem("Expense data", data);
  sessionStorage.setItem("Add data", value);
  sessionStorage.setItem("Expense data", data);

  return (
  <main>
   <FirstContext.Provider value={[money, setMoney]}>
    <SecondContext.Provider value={transactionData}>
       <Header balance={money.balance} expense={money.expense}/>
       <TranscationsChart transactionData={transactionData}/>
    </SecondContext.Provider>
   </FirstContext.Provider>
    
  </main>
  )
}
export default App;