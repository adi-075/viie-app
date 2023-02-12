import React from 'react';
import VIIE from './assets/VIIE.png';

function testing() {
  return (
        <>
      <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] bg-no-repeat bg-cover " > 
      <div className='min-h-screen flex flex-col justify-center'>
        <div className="max-w-md w-full mx-auto mt-4 bg-slate-100 p-8 border border-gray-300 shadow-2xl">
        <div className='max-w-md w-12 mx-auto'>
          <img src={VIIE} alt="VIIE logo"/>
       </div>
          <div className="text-3xl font-bold text-gray-900 mt-4 text-center">Welcome Back</div>
          <div className="text-base text-gray-500 text-center">Please enter your details.</div>
          <form action="" className="space-y-6">
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
                <label htmlFor="" className="ml-2 text-sm text-gray-600 hover:text-gray-800">Remember me</label>
              </div>
              <div>
                <a href="forgot-password" class="font-medium text-sm text-blue-500 hover:text-blue-700">Forgot Password?</a>
              </div>
            </div>
            <div>
              <button className='w-full py-2 px-4 bg-red-800 hover:bg-red-900 rounded-md text-white text-sm'>Submit</button> 
            </div>
          </form>
        </div>
        </div>
        </div>
      </>
    
  )
}

export default testing