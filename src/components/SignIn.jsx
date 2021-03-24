import React, { useState } from "react";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";

import { signInWithGoogle } from "../firebase/firebaseUtils";

function SignIn() {
  const INITIAL_STATE = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ email: "", password: "" });
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
          I already have an account
        </h2>
        <span>Sign in with your email and password</span>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off">
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
          autoComplete="current-password"
        />
        <div className="mt-16 grid grid-cols-2 gap-16">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            stylings="bg-blue-500 text-white"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
