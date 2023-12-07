import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="container grid place-items-center min-h-[100vh]">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome to <span className="text-red-600">Movie Review</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Sign up a new account
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label htmlFor="first" className="labelDesign">
              First Name
            </label>
            <input type="text" id="first" className="inputDesign" />
          </div>
          <div className="block relative">
            <label htmlFor="last" className="labelDesign">
              LastName
            </label>
            <input type="text" id="last" className="inputDesign" />
          </div>
          <div className="block relative">
            <label htmlFor="email" className="labelDesign">
              Email
            </label>
            <input type="text" id="email" className="inputDesign" />
          </div>

          <div className="block relative">
            <label htmlFor="password" className="labelDesign">
              Password
            </label>
            <input type="text" id="password" className="inputDesign" />
          </div>

          <button className="bg-red-600 opacity-80 hover:opacity-100 transition duration-200 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
            Sign Up
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Already have an account ?
          <Link to="/login" className="text-sm text-red-600" href="#">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
