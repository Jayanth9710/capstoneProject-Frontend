import axios from 'axios';
import React, { useState,useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css';
import env from "./settings";
import * as Yup from 'yup';
import Textfield from './Textfield';
import {Formik,Form} from 'formik';
import dataContext from './ContextData'

function Login() { 
    const history = useHistory();
    const data = useContext(dataContext)
    const validate = Yup.object({
        email : Yup.string().email("Must be a valid e-mail ID.").required("Email is required"),
        password : Yup.string()
        .required("Password is Required to Sign-in")
    });

    
    const [loading,setLoading] = useState(false);
    const [failure, setFailure] = useState(false);

    const postData = async (values) => {
        setLoading(true)
        try {
            let userData = await axios.post(`${env.api}/login`,values);
            window.localStorage.setItem("app_token",userData.data.token);
            window.localStorage.setItem("user",userData.data.user);
            data.setcurrentUser( window.localStorage.getItem("user"))
            setLoading(false)
            setFailure(false);
            window.alert("Successful Sign-in!")
            history.push("/") 
        } catch (error) {
            console.log(error)
            setLoading(false)
            setFailure(true);
            if(error.message === "Request failed with status code 500") {
                window.alert("Username or Password is Incorrect");
            } else {
                window.alert("Check your connection");
            }
        }
    }
    return (
          <>
          {loading ? <h2>Loading....</h2> : (
            <div className='signin__container'>
                <Formik initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                    setLoading(true)
                    postData(values);
                }}>
                    {(formik) => (
                        <div className='signin__innerContainer'>
                            <div className='signin__title'>
                                <Form>
                                    <Textfield label="Email" name="email" type="email" placeholder="Enter your email address"/>
                                    <Textfield label="Password" name="password" type="password" placeholder="Enter your Password"/>

                                    <button className='signin__buttons' type='submit'>LOGIN</button>
                                </Form>
                                {failure && <span className="failure">Something went wrong!</span>}
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        )}
          </>   
    )
}

export default Login
