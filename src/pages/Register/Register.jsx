import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getuser, userdetails } from "../../lib/axios/api-functions/user";
import { ErrorMessage, Field, Form, Formik } from "formik";
import uuid from "react-uuid";
import "../Login/Login.css";

const Register = () => {
  const [user, setUser] = useState();
  const navigater = useNavigate();

  useEffect(() => {
    getuser().then(({ data }) => setUser(data));
  }, []);

  let initialValue = {
    id: uuid(),
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "Enter Your Email";
    else if (!values.email.endsWith("@gmail.com"))
      errors.email = "Invalid Email";
    if (!values.password) errors.password = "Enter Your password";
    else if (values.password.length < 7) errors.password = "Invalid password";
    return errors;
  };

  const handlesubmit = (values, props) => {
    const getuser = (values) => {
      const value = user?.find(
        (val) => val.email === values.email && val.password === values.password
      );
      if (
        value?.email === values.email &&
        value?.password === values.password
      ) {
        alert("email already exist");
        props.resetForm();
      } else {
        userdetails(values);
        props.resetForm();
        navigater("/login");
      }
    };
    getuser(values);
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handlesubmit}
      validate={validate}
    >
      {({ isValid }) => {
        return (
          <div className="login-container flex justify-center text-white ">
            <Form className="login-container1 w-[400px] h-[80vh] flex flex-col p-10">
              <h1 className="login-h1 font-sans font-bold pb-[10px]  ">
                Sign up
              </h1>
              <div className="inpt-container relative">
                <Field
                  className="login-inpt1 mb-[25px] p-[10px] p-left"
                  placeholder=" "
                  type="email"
                  name="email"
                />
                <label className="login-lab1 absolute" htmlFor="">
                  Enter Email
                </label>
                <ErrorMessage name="email">
                  {(error) => (
                    <h2 className="text-red-600 absolute text-[13px] top-[48px]">
                      {error}
                    </h2>
                  )}
                </ErrorMessage>

                <Field
                  className="login-inpt2 mb-[25px] p-[10px] p-left"
                  placeholder=" "
                  type="password"
                  name="password"
                />
                <label className="login-lab2 absolute" htmlFor="">
                  Enter Password
                </label>
                <ErrorMessage name="password">
                  {(error) => (
                    <h2 className="text-red-600 absolute text-[13px] top-[117px]">
                      {error}
                    </h2>
                  )}
                </ErrorMessage>
              </div>
              <input
                type="submit"
                value={"Submit"}
                className="bg-red-600 padding"
              />

              <p className="padding">
                Go back to loginpage?
                <Link to={"/login"}>
                  <span className="font-sans font-bold font ">Sign in.</span>
                </Link>
              </p>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default Register;
