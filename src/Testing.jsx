import React from 'react';
import VIIE from './assets/VIIE.png'

function testing() {
    return (
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-medium text-xl">VIIE</div>
          <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Another text</div>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
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
                <label htmlFor="" className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <div>
                <a href="forgot-password" class="font-medium text-sm text-blue-500">Forgot Password?</a>
              </div>
            </div>
            <div>
              <button className='w-full py-2 px-4 bg-red-800 hover:bg-red-900 rounded-md text-white text-sm'>Submit</button> 
            </div>
          </form>
        </div>
      </div>
  )
}

export default testing