import React from 'react'
import Error from "../assests/error.png";
import {Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='w-screen h-screen flex items-center text-center'>
        <div className='justify-items-center'>
        <Link to="/"><p className="text-center text-base font-semibold hover:text-blue-800">Go Back to Home</p></Link> 
           <img src={Error} alt='error-page' />
           
        </div>
    </div>
  )
}

export default ErrorPage