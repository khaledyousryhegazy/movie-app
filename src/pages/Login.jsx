import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container grid place-items-center min-h-[100vh]">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black ">
        <div className="text-2xl font-bold mb-2 text-[#BB86FC] text-center">
          Welcome back to <span className="text-[#BB86FC]">Movie Review</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#BB86FC]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
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

          <div>
            <a className="text-sm text-[#BB86FC]" href="#">
              Forgot your password?
            </a>
          </div>
          <button className="bg-[#BB86FC] opacity-80 hover:opacity-100 transition duration-200 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
            Login
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem] text-white">
          Don’t have an account yet?{" "}
          <Link to="/sign-in" className="text-sm text-[#BB86FC]" href="#">
            Sign up for free!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
