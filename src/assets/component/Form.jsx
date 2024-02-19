import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Todo.css'


const Form = () => {

const [user,setuser]=useState(null)
const [email,setEmail]=useState(null)
const [pass,setPass]=useState(null)

const fun= async(e)=>{
    e.preventDefault()
   const sndbkdata={
    name:user,
    email:email,
    password:pass
   }

   console.log(sndbkdata)
   await axios({
    method: 'post',
    url: 'http://localhost:3000/api/user/add_user',
    data: sndbkdata
  });
  console.log(x.data);
}

  return (

    <>
    <form onSubmit={(e)=>fun(e)}>
        <input type='text' placeholder='Name' value={user} onChange={(e)=>setuser(e.target.value)}/><br/>
        <input type='email' placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type='password' placeholder='password'value={pass} onChange={(e)=>setPass(e.target.value)}/><br/>
        <input type='submit' />
    </form>
   
    </>
  )
}

export default Form