import React, { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "./CustomButton";
import FormInput from "./FormInput";
import { signUpStart } from "../redux/user/userActions";

const SignUp = ({ signUpStart }) => {
  const INITIAL_STATE = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart(state);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          I do not have an account
        </h2>
        <span>Sign up with your email and password</span>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          required
          handleChange={handleChange}
          placeholder="Russell Chan"
          label="Name"
          autoComplete="name"
        />
        <FormInput
          type="email"
          name="email"
          value={state.email}
          required
          handleChange={handleChange}
          placeholder="jrussellchan2000@gmail.com"
          label="Email"
          autoComplete="email"
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          required
          handleChange={handleChange}
          label="Password"
          autoComplete="new-password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          required
          handleChange={handleChange}
          label="Confirm Password"
          autoComplete="new-password"
        />
        <div className="mt-16 grid grid-cols-2 gap-16">
          <CustomButton type="submit">Sign up</CustomButton>
        </div>
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   signUpStart: (signUpData) =>
//     dispatch(signUpStart({ ...signUpData })
// });

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
