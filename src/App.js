import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('form: ', values);
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Field required';
      if (!values.password) errors.password = 'Field required';
      if (!values.email.includes("@") && values.email) errors.email = 'Username should be an email';
      if (!values.email.includes(".") && values.email) errors.email = 'Username should be an email';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username:</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange}
          value={formik.values.email}/>
        <div id="emailError">{formik.errors.email ? formik.errors.email : ""}</div>
        <div>Password:</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange}
          value={formik.values.password}/>
        <div id="pswError">{formik.errors.password ? formik.errors.password : ""}</div>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
