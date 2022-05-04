import Navigation from "../components/Navigation";
import React from 'react';
import { useFormik } from 'formik';
import {NavLink} from "react-router-dom";
import API from "../services/api";

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '*Invalid email address';
    }

    if (!values.username) {
        errors.username = '*Required';
    }

    if (!values.password) {
        errors.password = '*Required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)) {
        errors.password = '*Password must be stronger';
    }

    return errors;
};

const SigninForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
          API.post('/user/sign-up', values)
          .then(function (response) {
            alert("You have successfully signed up!");
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
            <p>Afin de profiter de l'ensemble des fonctionnalités du jeu, veuillez vous enregistrer ou créer un compte utilisateur.</p>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username"/>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    placeholder={"Username"}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div id={"error"}>{formik.errors.username}</div>
                ) : null}

                <label htmlFor="email"/>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder={"Email address"}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div id={"error"}>{formik.errors.email}</div>
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

                <button id={"button"} type="submit">Submit</button>
                <p className="message">Already have account ? &nbsp;
                    <NavLink to={"/Signin"}>
                        Sign in
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default SigninForm;
