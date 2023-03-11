import React from 'react'
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { Container } from '@mui/material'
import Navbar from '../../components/Navbar'
import img from '../../assets/image/register.png'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate();
    const registerSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your username'),
        email: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your username'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your password'),
        userRole: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please select your role'),
    });
    return (
        <>
            <Container
                className="register-section">
                <div className="register-area">
                    <div className="img-area">
                        <img src={img} alt="" />
                    </div>
                    <div className="input-box">
                        <h3>Register to Recipes <span>App   </span>  </h3>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                userRole: '',
                            }}
                            validationSchema={registerSchema}
                            onSubmit={async (values) => {
                                try {
                                    const data = await axios.post(`${process.env.REACT_APP_API_URL}/register`, values)
                                    console.log(data, "daasdfasdfsafsadfsd")
                                    console.log(data.isRegister, "test")
                                    if (data.data.isRegister) {
                                        toast.success(data.data.msg);
                                        navigate('/')
                                    } else {
                                        toast.error(data.data.msg);
                                    }
                                } catch (error) {
                                    console.log(error)
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='input-group'>
                                        <label htmlFor="Name">Full Name</label>
                                        <Field name="name" className='input-field' />
                                        {errors.name && touched.name ? (
                                            <div>{errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor="email">Username or Email</label>
                                        <Field name="email" className='input-field' />
                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor="password">Password</label>
                                        <Field name="password" className='input-field' type='password' />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor="password">Role</label>
                                        <Field as="select" name="userRole" className="input-field">
                                            <option value="">Account Type</option>
                                            <option value="trainee">Trainee</option>
                                            <option value="chef">Chef</option>
                                        </Field>
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className="forget-pass">
                                        <NavLink> Forget Password</NavLink>
                                    </div>
                                    <button type="submit" className='btn'>Submit</button>
                                    <div className="login-link">
                                        Already have an account? <NavLink to='/'> Login</NavLink>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div>

                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Register