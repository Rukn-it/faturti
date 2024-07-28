import { React, useState, useEffect } from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../redux-store/AuthSlice";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("email is required ")
    .email("Invalid email format"),
  password: Yup.string()
    .required("password is  required ")
    .min(8, "Password must be at least 8 characters"),
});
 


const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { loading, error } = useSelector((state) => state.auth);

  // useEffect(()=>{
  //   if (isLoggedIn) {
  //     navigate('/', { replace: true });
  //     toast.success("You already Logged in", {
  //       className: "custom-class-toast",
  //     });
      
  //   }
  //   },[])
    

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(loading);
    try {
      dispatch(loginUser(values));
      console.log(loading);
    } catch (error) {
      console.error("Login failed:", error);
      setTimeout(() => {
      toast.error("Invalid d", {
          className: "custom-class-toast",
          duration: 4000,
        });
      }, 3000);
    }
  };

  return (
    <>
      <section className="section__login">
        <Formik
          validationSchema={LoginSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <div className="email-box mb-3">
                    <div className="title-input">Email * </div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder=""
                      className="form-control inp_text"
                      id="email"
                    />
                    <p className="error text-red-700  ms-2">{errors.email}</p>
                  </div>
                  <div className="password-box mb-7">
                    <div className="title-input">Password * </div>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder=""
                      className="form-control"
                    />
                    <p className="error text-red-700  ms-2">{errors.password}</p>
                  </div>
                  <button type="submit" className="button__login">
                    {loading ? (
                      <div className="loader"></div>
                    ) : (
                      <div>Login</div>
                    )}
                  </button>
                  <Link to="/register">Register</Link>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </section>
    </>
  );
};
export default Login;
