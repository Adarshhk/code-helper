import React, { useContext, useState } from 'react'
import TextContext from '../context/TextContext'


const Apikey = () => {

  const {setApi} = useContext(TextContext);
  const [api , setAPI] = useState("");
  const [button , setButton] = useState("submit")
  const val = () => {
    return button
  }


  const onChange = (e) => {
    setAPI(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setButton("✅")
    setTimeout(() => {
      setButton("Submit")
    }, 1000);
    setApi(api);
  }

  return (
    <div className='text-center font-mono'>
      <h2 className='underline mt-28 text-4xl text-white mb-10'>ENTER YOUR API KEY HERE</h2>

      <span className='text-2xl text-white'>Login to </span><a className = 'underline text-blue-300 text-2xl' href='https://openai.com' target='_blank'>OpenAI</a><br/>
      <span className='text-2xl text-white'>Go to :- </span><a className = 'underline text-blue-300 text-2xl' href='https://platform.openai.com/api-keys ' target='_blank'>API KEY</a>

      <form className="mt-10 max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">

          <input onChange = {onChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter API key" required />
          <button disabled = {api ? false : true} onClick = {handleClick} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{val()}</button>

        </div>
      </form>
      <p className='mt-5 text-yellow-100 '>Copy & Paste your OpenAI API key to access services.</p>
      <p className='mt-3 text-yellow-100 '>Your OpenAI API key is safe with us.</p>
    </div>
  )
}

export default Apikey