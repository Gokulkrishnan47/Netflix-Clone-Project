import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getuser } from "../../lib/axios/api-functions/user";
import "./Login.css";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigater = useNavigate();

  let initialValue = {
    id: 1,
    email: "",
    password: "",
  };

  useEffect(() => {
    getuser().then(({ data }) => setUser(data));
  }, []);

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
        navigater("/home");
        props.resetForm();
        localStorage.setItem("userdetails", JSON.stringify(values));
      } else {
        alert("invalid user");
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
                Sign in
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
                value={"Sign in"}
                className="bg-red-600 padding"
              />
              <div className=" flex ">
                <div className="ch-container1">
                  <input type="checkbox" />
                  <label htmlFor="">Remainder Me</label>
                </div>
                <h1 className="ch-container2">Need to help?</h1>
              </div>
              <p className="padding">
                New to Netflix?
                <Link to={"/register"}>
                  <span className="font-sans font-bold font ">
                    Sign up now.
                  </span>
                </Link>
              </p>
              <p className="padding">
                this page protected by Google to ensure your're not bot.
                <span className="text-blue-900">Learn more</span>
              </p>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginPage;
