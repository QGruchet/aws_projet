import Navigation from "../components/Navigation";
import React from 'react';
import { useFormik } from 'formik';
import {NavLink} from "react-router-dom";
import API from "../utils/api";

const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = '*Required';
    }

    if (!values.password) {
        errors.password = '*Required';
    }

    return errors;
};

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validate,
        onSubmit: values => {
          API.post('/user/login', values)
          .then(function (response) {
            alert("You have successfully logged in!");
            console.log(response.data);
          })
          .catch(function (error) {
            alert("Error: " + error.response.data);
          });
        },
    });
    return (
        <div>
            <Navigation/>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="login"/>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                    placeholder={"Username or email address"}
                />
                {formik.touched.login && formik.errors.login ? (
                    <div id={"error"}>{formik.errors.login}</div>
                ) : null}

                <label htmlFor="password"/>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder={"Password"}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div id={"error"}>{formik.errors.password}</div>
                ) : null}

                <button type="submit">Submit</button>
                <p className="message">New User ? &nbsp;
                    <NavLink to={"/Signup"}>
                        Sign up
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default SignupForm;
