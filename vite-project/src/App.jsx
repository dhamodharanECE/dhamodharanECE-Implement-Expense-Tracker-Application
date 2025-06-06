import './App.css'
import React, { useState } from 'react'
import { FirstContext, SecondContext  } from './Context'
import Header from './Header/Header'
import { Datasheet } from './Datasheet'




const App = () => {
  const [money, setMoney] = useState({
      balance: 3800, 
      expense: 1200
  });
  const [transactionData, setTransactionData] = useState(Datasheet);
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