import React from 'react';
import {Formik, Field, Form } from 'formik';

const SighUp = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        birthday: new Date,
        password: ''
    }
    const onSubmit = (values, actions) => {
        console.log(values)
    }

    return (
        <div>
            <h2>SighUp</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}>
                {(props) => (
                    <Form>
                        <Field name = "firstName" placeholder="Type your first name"/>
                        <Field name = "lastName" placeholder="Type your last name"/>
                        <Field name = "email" placeholder="Type your email"/>
                        <Field name = "birthday" placeholder="Type your birthday"/>
                        <Field name = "password" placeholder="Type your password"/>
                    </Form>
                )

                }

            </Formik>
        </div>
    )
}

export default SighUp;