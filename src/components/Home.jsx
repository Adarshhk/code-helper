import React, { useContext, useEffect } from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import TextContext from '../context/TextContext';
const Home = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/api')
  }
  return (
    <div className='font-mono mt-48 ml-20 '>
        <h1 className='text-8xl text-yellow-300'>CodeHelper</h1>
        <h4 className='mt-5 ml-2 text-4xl text-white font-bold'>Web app to assist passionate coders.</h4>
        <p className='ml-2 text-yellow-100 mt-2'>Generate comments, understand code, find bugs, find time complexity, change language, iterate through given input and much more...</p>
        <button type="button" className="py-4 px-10 me-2 mb-2 mt-6 text-xl font-medium text-yellow-300 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-yellow-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleClick}>Set API Key</button>
    </div>
  )
}

export default Home