import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const SignInSignUp = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-20">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default SignInSignUp;
