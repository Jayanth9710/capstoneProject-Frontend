import axios from 'axios';
import React, { useState,useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css';
import env from "./settings";
import dataContext from './ContextData'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const data = useContext(dataContext)
    let history = useHistory();
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let logindata = await axios.post(`${env.api}/login`, { email, password })
            console.log(logindata)
            window.localStorage.setItem("user",email);
            window.localStorage.setItem("app_token",logindata.data.token);
            data.setcurrentUser(email)
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        
           <main class="form-signin text-center">
            <form onSubmit={handleSubmit}>
                <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <input class="w-100 btn btn-lg btn-primary" type="submit" value="Sign in" />
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
        
    )
}

export default Login
