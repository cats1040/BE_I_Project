import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import menuImg from "../../assets/windowsMenu.png"
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {

    const [date, setDate] = useState(new Date().toUTCString());
    
    useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toUTCString());
    }, 1000);    
    return () => clearInterval(interval);
    }, []);

  return (
    <>
        <Header title="Login" />

        <div className="loginContainer">
            <form action="http://localhost:8080/reviews/login" method='POST'>
                <input type="text" name="username" id="username" placeholder='Username'required/>
                <input type="password" name="password" id="password" placeholder='Password' required/>
                <button>Login</button>
            </form>
            <Link to="/register"><p className='linkToRegisterLogin'>Don't have an account?</p></Link>
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
