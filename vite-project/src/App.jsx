
import './App.css'
 import React, { useEffect, useState } from 'react'
 
 const App = () => {
  const [data, setData] = useState(0);

  function ClickButton(){
    alert(`Count:${data}`);
    setData(data + 1)
  }
  console.log(data);

   return (
    <>
     <div>
       <button onClick={ClickButton} style={{ backgroundColor: 'blue', width: '100px', height: '50px', border:'5px solid gold', borderRadius: '10px' }}>BUTTON</button>
     </div>
    </>
   )
 }
 
 export default App