import styles from './LoginPage.module.css'
import {useEffect, useRef, useState} from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(emailRef.current.value, passwordRef.current.value);
        handleLogin()
    }

    const handleLogin = async() => {
        try{
           const data = await fetch('http://localhost:8000/api/login', {
                method:'POST',
                body: JSON.stringify({
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
            })
            const response = await data.json()
            console.log(response);
        }catch (e){
        }
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')

    return(
        <div className={styles.wrapper}>
         <LoginForm
         handleSubmit={handleSubmit}
         emailRef={emailRef}
         passwordRef={passwordRef}/>
        </div>
    )
}
export default LoginPage