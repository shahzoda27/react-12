import React from 'react'
import "./secondcomponent.scss"
import { MyContext } from '../App'
import { useContext } from 'react'
export default function SecondComponent() {
  const value = useContext(MyContext)
  return (
    <div className='box'>
    <h1>2-component</h1>
    <div className='box-header'>
        <p>A component</p>
        <div className='countA'>
        <h4>Count: {value.count3}</h4>
        <button className='btn btn-info m-lg-4' onClick={()=>value.setCount3(prev=>prev+1)}>+</button>
        <button className='btn btn-danger' onClick={()=>value.setCount3(prev=>prev-1)}>-</button>
        </div>
    </div>
    <div className='box-header'>
    <p>B component</p>
    <div className='countA'>
        <h4>Count {value.count4}</h4>
        <button className='btn btn-info m-lg-4' onClick={()=>value.setCount4(prev=>prev+1)}>+</button>
        <button className='btn btn-danger' onClick={()=>value.setCount4(prev=>prev-1)}>-</button>
    </div>
    </div>
</div>
  )
}
