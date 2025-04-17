import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import menuImg from "../../assets/windowsMenu.png"
import "./Register.css"
import { Link } from 'react-router-dom'

export default function Register() {

    const [date, setDate] = useState(new Date().toUTCString());
    
    useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toUTCString());
    }, 1000);    
    return () => clearInterval(interval);
    }, []);

  return (
    <>
        <Header title="Register" />

        <div className="registerContainer">
            <form action="http://localhost:8080/reviews/register" method='POST'>
                <input type="email" name="email" id="email" placeholder='Enter email id'/>
                <input type="text" name="username" id="usdeername" placeholder='Username'/>
                <input type="password" name="password" id="password" placeholder='Set password'/>
                <button>Register</button>
            </form>
            <Link to="/login"><p className='linkToLoginRegister'>Already have an account?</p></Link>
        </div>

        {/* FOOTER */}
        <div className="footerContainer">
        <div className="footerMenuImg">
          <img src={menuImg} alt="windows Menu Image" /> 
        </div>

        <div className="currentTime">{date}</div>
      </div>
    </>
  )
}
