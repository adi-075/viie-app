import React from 'react';
import VIIE from '../assets/VIIE.png';

function testing() {
  return (
        <>
      <div class="w-full h-full bg-[url('https://cdn.dribbble.com/users/1695232/screenshots/16242925/media/053cbdbf91f70e46d804cd3aed3bc00f.png?compress=1&resize=800x600&vertical=top')] bg-no-repeat bg-cover " > 
      <div className='min-h-screen flex flex-col justify-center'>
        <div className="max-w-md w-full mx-auto my-auto bg-slate-100 p-8 border border-gray-300 shadow-2xl">
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
                <a href="/Sign-up" class="font-semibold text-base text-black-500 hover:text-blue-700">Not a Member? Click Here to Sign-Up</a>
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