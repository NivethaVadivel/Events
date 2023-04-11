import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from "../css/signup.module.css"
import signup from "../images/loginbg1.jpg"
import axios from "axios"
export const Signup = () => {
    const navigate=useNavigate();
    const[name,setName]=useState("")
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")
    const[num,setNum]=useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(pass==cpass){
            const register=async()=>{
                const response=await axios.post("http://localhost:8000/api/auth/register",{
                    username:name,
                    email:mail,
                    password:pass,
                    confirmpassword:cpass,
                    contact:num
                })
                console.log(response);
                navigate('/login')
            }
            register();
            
        }
        else{
            alert("Enter the Password correctly")
        }
    }
  return (
    <div className={styles.container}>
    <div className={styles.full}>
        <h2>SIGNUP</h2>
        <form onSubmit={submit}>
            <div className={styles.row} >
            <label>User Name: </label>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter the User name"/>
            </div><br></br>
            <div className={styles.row}>
            <label>Email : </label>
            <input type="email" onChange={(e)=>setMail(e.target.value)} placeholder="Enter the email" />
            </div>
            <br></br>
            <div className={styles.row}>
            <label>Password : </label>
            <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Enter the password" />
            </div><br></br>
            <div className={styles.row}>
            <label>Confirm password : </label>
            <input type="password" onChange={(e)=>setCpass(e.target.value)} placeholder="Enter the password"/>
            </div><br></br>
            <div className={styles.row}>
            <label>Contact : </label>
            <input type="number" onChange={(e)=>setNum(e.target.value)} placeholder="Enter the phone number"/>
            </div><br></br>
            <button className={styles.signbut} >Sign Up</button>
            <div>
            <p>Aldready Have an Account,</p>
            <Link to='/login'>Login</Link>
            </div>
        </form>
    </div>
    <img src={signup} className={styles.homebody}/>
    </div>
  )
}
