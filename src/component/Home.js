import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    const component1 =()=>{
        navigate("/first")
    }
    const component2 =()=>{
        navigate("/second")
    }
  return (
    <div>
        <button className='btn btn-outline-primary m-5' onClick={component1}>FirstComponent</button>
        <button className='btn btn-outline-danger m-5' onClick={component2}>SecondComponent</button>
    </div>
  )
}
