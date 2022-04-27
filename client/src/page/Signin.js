import { useMemo, useState } from "react";
import { Form, Input, Textarea, useFormValidation } from "reactjs-forms";
import Navigation from "../components/Navigation";

import React from 'react';
import { useFormik } from 'formik';
import {NavLink} from "react-router-dom";

const validate = values => {
    const errors = {};

    if (!values.pseudo) {
        errors.pseudo = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.pseudo)) {
        errors.pseudo = '*Invalid pseudo';
    }

    if (!values.password) {
        errors.password = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        errors.password = '*Password must be stronger';
    }

    return errors;
};

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            pseudo: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <Navigation/>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="pseudo"/>
                <input
                    id="pseudo"
                    name="pseudo"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pseudo}
                    placeholder={"Pseudo"}
                />
                {formik.touched.pseudo && formik.errors.pseudo ? (
                    <div id={"error"}>{formik.errors.pseudo}</div>
                ) : null}

                <label htmlFor="password"/>
                <input
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder={"Secret password"}
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