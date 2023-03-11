import { Container } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import img from '../../assets/image/login.png'
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/reducers/UserSlice";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logSchema = Yup.object().shape({
        email: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });


    return (
        <>
            {/* <Navbar /> */}
            <Container
                className="login-section">

                <div className="login-area">

                    <div className="input-box">
                        <h3>Welcome to Recipes <span>App   </span>                       </h3>
                        {/* <p><RiDoubleQuotesL /> If you learn a recipe, you can cook the recipe <RiDoubleQuotesR/></p> */}

                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={logSchema}
                            onSubmit={async (values, { resetForm }) => {
                            
                                console.log(process.env.REACT_APP_API_URL, "sfafas")
                                console.log(values)
                                const requestOptions = {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(values),
                                };
                                const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
                                const data = await res.json();
                                if (data.isLogin) {
                                    dispatch(addUserDetails(data.userData));
                                    navigate('/')
                                    toast.success(data.msg)
                                } else {
                                    toast.error(data.msg)
                                }
                                resetForm({ values: "" });

                            }}
                        >
                        {({ errors, touched }) => (
                            <Form>
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
                                <div className="forget-pass">
                                    <NavLink> Forget Password</NavLink>
                                </div>
                                <button type="submit" className='btn'>Submit</button>

                                <div className="register-link">
                                    Don't have account? <NavLink to='/register'> Register Now</NavLink>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div>

                    </div>
                </div>
                <div className="img-area">
                    <img src={img} alt="" />
                </div>
            </div>
        </Container>
        </>
    )
}

export default Login