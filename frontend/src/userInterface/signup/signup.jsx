import React, {Fragment, useState, useEffect} from "react";
import './signup.scss';
import Layout from '../components/shared/layout'
import '../../App.scss';
import { Formik } from 'formik';
import { Link, withRouter } from 'react-router-dom';

import Loader from '../components/shared/loader'
import MetaData from '../components/shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { register, clearErrors } from "../../actions/userActions";



const Signup = ({ history }) =>{

    
    const[user, setUser] = useState({
        name: '',
        email: '',
        phoneNum: '',
        password:''
    })

    const { name, email, phoneNum, password } = user;
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview ] = useState('/images/default_avatar.jpg')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if(isAuthenticated) {

            history.push('/')
          
        }

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('phoneNum', phoneNum);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))

    }

      
    return (
        <Layout>
            <Fragment>
                {loading ? <Loader /> :(
                    <Fragment>
                        <MetaData title={'register'} />
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
           </Fragment>
           )}
           </Fragment>

        </Layout>
    )
}


export default withRouter(Signup);