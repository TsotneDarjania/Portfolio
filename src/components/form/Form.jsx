import React, { useEffect, useRef, useState } from 'react'
import {Button, TextField } from '@mui/material';
import validate from 'validate.js';
import style from "./form.module.css"
import emailjs from 'emailjs-com';


const USER_ID = "user_8MHjAPWfJRlbU608A4cBe"
const TEMPLATE_ID = "template_nwmy0ba"
const SERVICE_ID = "service_nh7oslk"

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: { maximum: 128 },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: { maximum: 300 },
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
    length: { maximum: 800 },
  },
};

const Form = () => {  

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();
    setFormState(formState => ({
      ...formState,
        values: {
          ...formState.values,
          [e.target.name]:
            e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
        },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field]
    ? true
    : false;


    const sendEmail = (e) => {
      e.preventDefault();
        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          USER_ID
        )
        .then((res) =>  { 
          console.log('SUCCESS!', res.status, res.text); 
          window.location = "";
        })
        .catch(error => console.log('FAILED...', error));
    }


    const formRef = useRef()

  return (
    <form className={style.form} ref={formRef}>
      <TextField
        placeholder="Name"
        label="Name"
        variant="outlined"
        size="medium"
        name="name"
        id="name"
        helperText={
          hasError('name') ? formState.errors.name[0] : null
        }
        error={hasError('name')}
        onChange={handleChange}
        value={formState.values.name || ''}
      />
      <TextField
        placeholder="E-mail"
        label="E-mail"
        variant="outlined"
        size="medium"
        name="email"
        id="email"
        type="email"
        helperText={
          hasError('email') ? formState.errors.email[0] : null
        }
        error={hasError('email')}
        onChange={handleChange}
        value={formState.values.email || ''}
       />
      <TextField
        placeholder="Message"
        label="Message"
        variant="outlined"
        size="medium"
        rows={5}
        multiline
        name="message"
        id="message"
        helperText={
          hasError('message') ? formState.errors.message[0] : null
        }
        error={hasError('message')}
        onChange={handleChange}
        value={formState.values.message || ''}
      />
       <Button
        size="large"
        variant="contained"
        color="primary"
        disabled={!formState.isValid}
        onClick={sendEmail}
       > Send </Button>
     
    </form>
  )
}

export default Form