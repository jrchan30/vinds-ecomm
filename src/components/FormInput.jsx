import React, { useState } from "react";
import classnames from "classnames";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const [styling, setStyling] = useState("");

  return (
    <div className="relative h-10 mt-5 mb-10">
      {label ? (
        <label
          htmlFor="password"
          className={classnames(
            `transition transform duration-800 ease-in-out ${styling} left-2 bottom-2 absolute bg-white px-1`,
            {
              "-translate-y-4 -translate-x-2": otherProps.value,
            }
          )}
        >
          {label}
        </label>
      ) : null}
      <input
        className="mt-5 h-full w-full bg-white border-gray-300 border-2 px-2 border-blue rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-transparent"
        onChange={handleChange}
        {...otherProps}
        onFocus={() => setStyling("-translate-y-4 -translate-x-2")}
        onBlur={() => setStyling("")}
      />
    </div>
  );
};

export default FormInput;
