import styles from './LoginPage.module.css'
import {useEffect, useRef, useState} from "react";

import { useForm } from "react-hook-form";
const LoginPageUseForm = () => {
    const {register,handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        handleLogin()
    }

    const handleLogin = async() => {
        try{
           const data = await fetch('http://localhost:8000/api/login', {
                method:'POST',
                body: JSON.stringify({
                    email: '',
                    password: ''
                })
            })
            const response = await data.json()
            console.log(response);
        }catch (e){
        }
    }

    console.log('render')
    return(
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
                <label htmlFor="">Email:
                    <br/>
                    <input type="email" {...register('email')} />
                </label>

                <label htmlFor="">Password:
                    <br/>
                    <input type="password" {...register('password')}/>
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginPageUseForm