import { useMemo, useState } from "react";
import { Form, Input, Textarea, useFormValidation } from "reactjs-forms";
import Navigation from "../components/Navigation";

import React from 'react';
import { useFormik } from 'formik';
import {NavLink} from "react-router-dom";

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = '*Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = '*Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = '*Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = '*Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '*Invalid email address';
    }

    if (!values.pseudo) {
        errors.pseudo = '*Required';
    }

    if (!values.password) {
        errors.password = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        errors.password = '*Password must be stronger';
    }

    return errors;
};

const SigninForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
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
                <label htmlFor="firstName">Prénom : </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder={"Let's"}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div id={"error"}>{formik.errors.firstName}</div>
                ) : null}

                <label htmlFor="lastName">Nom : </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder={"Drawmadère"}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div id={"error"}>{formik.errors.lastName}</div>
                ) : null}

                <label htmlFor="Birthday">Anniversaire : </label>
                <input
                    id="Birthday"
                    name="Birthday"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />


                <label htmlFor="email">Email : </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder={"let's_drawmadere@uvsq.fr"}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div id={"error"}>{formik.errors.email}</div>
                ) : null}

                <label htmlFor="pseudo">Pseudo : </label>
                <input
                    id="pseudo"
                    name="pseudo"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pseudo}
                    placeholder={"Chameau"}
                />
                {formik.touched.pseudo && formik.errors.pseudo ? (
                    <div id={"error"}>{formik.errors.pseudo}</div>
                ) : null}

                <label htmlFor="password">Mot de passe : </label>
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