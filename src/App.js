import React from 'react'
import { createContext } from 'react'
import FirstComponent from './component/FirstComponent'
import { useState } from 'react'
import SecondComponent from './component/SecondComponent'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
export const MyContext = createContext()
export default function App() {
  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)
  const [count3,setCount3] = useState(0)
  const [count4,setCount4] = useState(0)
  return (
    <MyContext.Provider value={{count1,setCount1,count2,setCount2,count3,setCount3,count4,setCount4}}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='first' element={<FirstComponent/>}/>
      <Route path='second' element={<SecondComponent/>}/>
     </Routes>
    </MyContext.Provider>
  )
}
