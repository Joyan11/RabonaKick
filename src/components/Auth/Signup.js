import React, { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/form.css";
import axios from "axios";
import { toastMessages } from "../../utils/toastMessages";
import { DotsLoader } from "../Loaders/DotsLoader";

export const Signup = () => {
  const [formError, setFormError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [errorModal, setErrorModal] = useState(false);
  const { authLoader, setAuthloader } = useAuth();
  const [values, setValues] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    setTimeout(() => setErrorMessage(""), 4000);
    return () => clearTimeout();
  }, [errorMessage]);

  const createUser = async (email, firstname, lastname, password) => {
    try {
      setErrorMessage("");
      setFormError("");
      setAuthloader((value) => !value);
      const {
        status,
        data: { success, message },
      } = await axios.post("https://rabonaserver.joyan11.repl.co/auth/signup", {
        user: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });
      console.log(message);
      if (status === 201 && success === true) {
        setValues({
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          confirmpassword: "",
        });
        toastMessages("Signup successful");
      }
    } catch (error) {
      if (error.response.status === 409) {
        // setErrorModal(true);
        setErrorMessage("Email already exists");
      }
    } finally {
      setAuthloader((value) => !value);
    }
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const refineUserdata = (str) => {
    return str.split(" ").join("").toLowerCase();
  };

  const handleSubmit = (e) => {
    const { email, firstname, lastname, password, confirmpassword } = values;
    e.preventDefault();
    if (password !== confirmpassword) {
      setFormError("Password do not match");
    } else {
      setFormError("");
      createUser(refineUserdata(email), firstname, lastname, password);
    }
  };

  return (
    <div>
      <p className="form-error-message">{formError}</p>
      <div className="form-container">
        <form id="form" className="form" onSubmit={handleSubmit}>
          <h2>Register with us</h2>
          <div className="form-control ">
            <label htmlFor="firstname">First Name</label>
            <input
              autoFocus="true"
              type="text"
              id="firstname"
              placeholder="Enter Your First Name"
              required
              name="firstname"
              value={values.firstname}
              onChange={handleChange}></input>
          </div>
          <div className="form-control ">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter Your Last Name"
              required
              name="lastname"
              value={values.lastname}
              onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <label htmlFor="email" required>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              required
              name="email"
              value={values.email}
              onChange={handleChange}></input>
            <small>{errorMessage}</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              name="password"
              value={values.password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Enter Password again"
              required
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}></input>
            <small>{formError}</small>
          </div>
          <div className="form-button">
            <button className="btn btn--round btn-primary">
              {authLoader ? <DotsLoader /> : "Submit"}
            </button>
          </div>
          <p className="form-message">
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
