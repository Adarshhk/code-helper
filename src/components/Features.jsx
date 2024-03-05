import React, { useContext } from 'react'
import TextContext from '../context/TextContext'


reconst Features = ({title , func}) => {
    const { setText , output , text , api , setOutput , setLoader} = useContext(TextContext);

    const handleChange = (e) => {
        
        setText(e.target.value);
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOutput("");
        setLoader(true);
        const data = await func(text , api);
        setOutput(data);
        setLoader(false);
    }
    return (
        <div className='mx-auto border-2 border-zinc-700 mt-20 rounded-sm w-3/4 h-3/4 p-4'>
            <h2 className='text-center text-4xl mb-4 text-yellow-300'>{title}</h2>
            <div className='flex'>

                <textarea onChange = {handleChange} id="message" rows="20" className="font-mono block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2" placeholder="Enter Code Here"></textarea>

                <textarea id="message" readOnly={true} rows="20" className="font-mono block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2" placeholder="Output Will Be Shown Here" value={output}></textarea>

            </div>
            <div className='text-center border-t-2 border-zinc-700'>
                <button onClick = {handleSubmit} type="button" className=" mt-4 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-yellow-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Generate Result</button>

            </div>
        </div>

    )
}

export default Features