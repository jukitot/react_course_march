import styles from "../../pages/LoginPage/LoginPage.module.css";
import {forwardRef} from "react";

const LoginForm = ({handleSubmit,emailRef, passwordRef}) => {
    console.log(emailRef, passwordRef)
    return(
        <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>


            <label htmlFor="">Email:
                <br/>
                <input type="email" ref={emailRef}/>
            </label>

            <label htmlFor="">Password:
                <br/>
                <input type="password" ref={passwordRef}/>
            </label>

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm