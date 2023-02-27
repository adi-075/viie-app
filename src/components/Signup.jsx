import React from "react";
import Button from "@mui/material/Button";
import VIIE from "../assets/VIIE.png";

const Signup = () => (
  <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] bg-no-repeat bg-cover ">
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-slate-100 p-8 border border-gray-300 shadow-2xl">
        <div className="max-w-md w-12 mx-auto">
          <img src={VIIE} alt="VIIE logo" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mt-4 text-center">
          Create an account
        </div>
        <div className="text-base text-gray-500 text-center">
          Please enter your details.
        </div>
        <form action="" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-bold text-gray-600 block"
            >
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-bold text-gray-600 block"
            >
              Phone <span class="font-normal">(recommended)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="pwd"
              className="text-sm font-bold text-gray-600 block"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            {/* <button className='w-full py-2 px-4 bg-red-800 hover:bg-red-900 rounded-md text-white text-sm'>Create Account</button> */}
            <Button className="w-full py-2 px-4" variant="contained">
              Create an Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Signup;
