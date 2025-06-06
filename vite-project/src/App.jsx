import './App.css'
import React, { useState } from 'react'
import Header from './Header/Header'
import  { data } from '../src/data'
import { FirstContext, SecondContext  } from './Context'




const App = () => {
  const [money, setMoney] = useState({
      balance: 3800, 
      expense: 1200
  });
  const [transactionData, setTransactionData] = useState(data);
  return (
  <main>
  <FirstContext.Provider value={[money, setMoney]}>
    <SecondContext.Provider transactionData={transactionData} >
      <Header balance={money.balance}  expense={money.expense} transactionData={transactionData} />
    </SecondContext.Provider>
  </FirstContext.Provider>
    
  </main>
  )
}

export default App