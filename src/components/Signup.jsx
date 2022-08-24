import React from 'react'
import Logo from "../assests/coffee.jpg";
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="w-full h-screen flex">
    <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
    <div className="p-4 flex flex-col justify-around">
        <form>
          <h2 className="text-4xl font-bold text-center mb-8">
            KapeCartel Co.
          </h2>
          <div className="text-center">
            <ul className="">
              <li className="mb-4">
                <input
                  className="border p-2 mr-2 hover:ring-[#705641] hover:ring-4"
                  type="text"
                  placeholder="Username"
                />
              </li>
              <li className="mb-4">
                <input
                  className="border p-2 mr-2 hover:ring-[#705641] hover:ring-4"
                  type="email"
                  placeholder="Email"
                />
              </li>
              <li>
                <input
                  className="border p-2 hover:ring-[#705641] hover:ring-4"
                  type="password"
                  placeholder="Password"
                />
              </li>
            </ul>
          </div>
          <div className="text-center mt-4">
            <button className="w-1/2 py-2 my-4 rounded-lg font-semibold text-black bg-[#9E978E] hover:bg-[#705641] hover:text-white hover:ring-white">
              Sign Up
            </button>
          </div>
          <div className="text-sm mt-10">
             <p className="text-center text-base">Already Have an Account?</p>
             <Link to="/"><p className="text-center text-base font-semibold hover:text-blue-800">Sign in Here</p></Link>
          </div>
        </form>
      </div>
      <div className="w-full h-[550px] hidden md:block">
        <img className="w-full h-full" src={Logo} alt="/" />
      </div>
    </div>
  </div>
  )
}

export default Signup