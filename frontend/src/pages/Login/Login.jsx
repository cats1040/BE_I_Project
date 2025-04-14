import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import menuImg from "../../assets/windowsMenu.png"
import "./Login.css"

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
            <form action="/reviews">
                <input type="text" name="username" id="username" placeholder='Username'/>
                <input type="password" name="password" id="password" placeholder='Password'/>
                <button>Login</button>
            </form>
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
