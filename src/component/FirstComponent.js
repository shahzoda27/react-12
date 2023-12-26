import React from 'react'
import "./firstcomponent.scss"
import { MyContext } from '../App'
import { useContext } from 'react'
export default function FirstComponent() {
    const value = useContext(MyContext)
  return (
    <div className='box'>
        <h1>1-component</h1>
        <div className='box-header'>
            <p>A component</p>
            <div className='countA'>
            <h4>Count: {value.count1}</h4>
            <button className='btn btn-info m-lg-4' onClick={()=>value.setCount1(prev=>prev+1)}>+</button>
            <button className='btn btn-danger' onClick={()=>value.setCount1(prev=>prev-1)}>-</button>
            </div>
        </div>
        <div className='box-header'>
        <p>B component</p>
        <div className='countA'>
            <h4>Count {value.count2}</h4>
            <button className='btn btn-info m-lg-4' onClick={()=>value.setCount2(prev=>prev+1)}>+</button>
            <button className='btn btn-danger' onClick={()=>value.setCount2(prev=>prev-1)}>-</button>
        </div>
        </div>
    </div>
  )
}