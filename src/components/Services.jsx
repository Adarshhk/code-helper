import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import { useContext , useEffect } from 'react';
import TextContext from '../context/TextContext';
const Services = () => {

  const location = useLocation();

  const {setOutput , setLoader} = useContext(TextContext)

  useEffect(() => {
    setOutput("");
    setLoader(false);
  }, [location]);


  return (
    <div className='flex flex-wrap justify-evenly w-3/4 mx-auto mt-24 '>

      <Link to="/services/generate-comments" className="block max-w-sm p-4 mb-3 mr-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-300">Generate Comments</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Will automatically generate comments in the code. Helps other to understand the code better when uploading to public website like Stackoverflow</p>
      </Link>


      <Link to="/services/explain-code" className="block max-w-sm p-4 mb-3 mr-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-300">Explain Code</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Explain the basic functionality of the code which can help to understand the purpose of the code without reading the whole code.</p>
      </Link>


      <Link to="/services/find-error" className="block max-w-sm p-4 mb-3 mr-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-300">Find Errors</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Helps to not only find the syntactical error but also any logical error of any code with its correct solution</p>
      </Link>


      <Link to="/services/flow-visual" className="block max-w-sm p-4 mb-3 mr-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-300">Code Flow Visualization</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Used to track each step of code's execution in real-time, allows to follow how variables change, simplifying code understanding and debugging.</p>
      </Link>


      <Link to="/services/translate" className="block max-w-sm p-4 mb-3 mr-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-300">Language Translation</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Used to convert code from one language to another, simplifies cross-language development.</p>
      </Link>


      <Link to="/services/time-complexity" className="block max-w-sm p-4 mb-3 mr-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-300">Check Time Complexity</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Used to analyze code efficiency. Helps to understand how code scales with input size to optimize for faster execution and improved resource usage.</p>
      </Link>

    </div>
  )
}

export default Services