import React from "react";
import './signup.scss';
import Layout from '../components/shared/layout'
import '../../App.scss';
import { Formik } from 'formik';
import { Link, withRouter } from 'react-router-dom';



const Signup = () =>{

      
    return (
        <Layout>
       <div className='sign-up'>
           <h1>Sign Up</h1>
           <div className='form-container'>
               <Formik>
                        <form >
                            <div>
                                <input
                                type='text'
                                name='firstname'
                                placeholder='First Name'
                                className=' nomad-input'
                             
                                />
                            </div>

                            <div>
                                <input
                                type='text'
                                name='lastname'
                                placeholder='Last Name'
                                className=' nomad-input'
                                
                                />
                            </div>

                            <div>
                                <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='nomad-input' 
                             
                                />
                                

                            </div>

                            <div>
                                <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className=' nomad-input'
                             
                                />

                            </div>

                            <div>
                                <input
                                type='Password'
                                name='passwordConfirm'
                                placeholder='Password Confirmation'
                                className='nomad-input'
                             
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black nomad-btn submit'
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className='error-message'>             
                            </div>

                            <div>
                                <Link to='login'  className='disc'>
                                    Already have an account? Log In
                                </Link> 
                            </div>
                            
                        </form>
               </Formik>
           </div> 
           </div>
        </Layout>
    )
}


export default withRouter(Signup);