import React from "react";
import Layout from '../components/shared/layout'
import { Formik } from 'formik';
import './login.scss';
import { Link, withRouter} from 'react-router-dom';



const LogIn = () => {
   
    return (

        <Layout>
            <div className='card'>
             <div className='log-in'>
            <h1>Log In</h1>
            <div className='container'>
                <Formik >
               
                            <form >
                                <div>
                                    <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    className="nomad-input"                                    
                                    />
                                </div>

                                <div>
                                    <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    className="nomad-input"
                                    />
                                </div>

                                <div className='submit-btn'>
                                    <button
                                    type='submit'
                                    className='button is-black nomad-btn submit'
                                    >
                                        Log In
                                    </button>
                                </div>

                                <div className='error-message'>
                                </div>

                                <div>
                                  <Link to='/forgetPassword'  className='disc'>
                                        Forgot Password ?
                                  </Link>
                                  <Link to='signup'  className='disc'>
                                        Need an account? Sign Up
                                  </Link>
                                </div>
                            </form>
                </Formik>
            </div>

            </div>
            </div>
        </Layout>
        
    ) 
    
}

export default withRouter(LogIn);
