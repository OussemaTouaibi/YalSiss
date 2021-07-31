import React, {Fragment, useState, useEffect} from "react";
import Layout from '../../components/shared/layout'
import { Formik } from 'formik';
import './login.scss';
import { Link, withRouter} from 'react-router-dom';


import Loader from '../../components/shared/loader'
import MetaData from '../../components/shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { login, clearErrors } from "../../../actions/userActions";






const LogIn = ({ history }) => {
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if(isAuthenticated) {

            history.push('/')
          
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }


    return (

        <Layout>
            <Fragment>
                {loading ? <Loader /> :(
                    <Fragment>
                        <MetaData title={'login'} />
                        <div className='card'>
             <div className='log-in'>
            <h1>Log In</h1>
            <div className='container'>
                <Formik >
               
                            <form onSubmit={submitHandler}>
                                <div>
                                    <input
                                    id='email_field'
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    className="nomad-input"  
                                    value={email}          
                                    onChange={(e) => setEmail(e.target.value)}                        
                                    />
                                </div>

                                <div>
                                    <input
                                    id='password_field'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    className="nomad-input"
                                    value={password}          
                                    onChange={(e) => setPassword(e.target.value)}   
                                    />
                                </div>

                                <div className='submit-btn'>

                                    <button
                                    id='login_button'
                                    type='submit'
                                    className='button is-black nomad-btn submit'

                                    >
                                        Log In
                                    </button>
                                </div>

                                <div className='error-message'>
                                </div>

                                <div>
                                  <Link to='/password/forgot'  className='disc'>
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
                    </Fragment>
                )}
            </Fragment>
            
        </Layout>
        
    ) 
    
}

export default withRouter(LogIn);