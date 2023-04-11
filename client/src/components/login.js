import React,{useState,useCallback} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './utils/Authentication';
import styles from '../css/login.module.css'
import login from '../images/loginbg3.jpg'
export const Login = () => {
    const navigate=useNavigate()
    const auth=useAuth()
    const location=useLocation();
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[flag,setFlag]=useState(-1)
    // const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   }, [todos]);
      const showpassword=useCallback(
        () => {
            var x=document.getElementById("showpass");
            x.type=="password"?x.type="text":x.type="password"
        },
        [pass]
      )
    // const showpassword=()=>{
    //     var x=document.getElementById("showpass");
    //     x.type=="password"?x.type="text":x.type="password"
    // }
    const submit=(e)=>{
        e.preventDefault();
        const login=async()=>{
            const response=await axios.post("http://localhost:8000/api/auth/login",{
                email:mail,
                password:pass,
            })
            console.log(response)
            // const json=await response.json();
            // console.log(json);
            if(response.data.msg==="sucess"){
                alert("success")
                console.log(response.data.data[0].username);
                auth.login(response.data.data[0].username,response.data.data[0].contact);
                setFlag(1)
                navigate(location.state?location.state.path:"/",{replace:true});
            }
            else{
                setFlag(0);
                navigate("/login")
            }
            
        }
        login();
    }
    
  return (
    <div className={styles.container} >
        <div className={styles.full}>
        <form  onSubmit={submit} className={styles.pad}>
        <h2>Login </h2>
            <div className={styles.main}>
            <label>Email : </label>
            <input label="Email" type="email" className={styles.forms} onChange={(e)=>setMail(e.target.value)} placeholder="Email" />
            </div>
            <br></br>
            <div className={styles.main}>
            <label>Password : </label>
            <input label="Password" type="password" className={styles.forms} onChange={(e)=>setPass(e.target.value)} id="showpass" placeholder="Password"/>
            </div>
            <br></br>
            
            <span><input type='checkbox' className={styles.showpass} onChange={showpassword}></input> Show Password</span>
            <br></br>
            <button className={styles.logbut} >Login</button>
            <br></br>
            <span className={styles.para}>Don't Have an account,</span>
            <br></br>
            <Link to='/signup'>signup</Link>
        </form>
        </div>

        <img src={login} className={styles.homebody}></img>
        {flag==1?<div></div>:(flag==0)?<p>Enter details correctly</p>:""}
        
    </div>
  )
}


