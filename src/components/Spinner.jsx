import React from 'react'
import { Circles } from 'react-loader-spinner'

const Spinner = ({ loader }) => {
    return (
        <div className='mt-5 flex fixed w-full justify-center'>
            <Circles
            height="25"
            width="25"
            color="#e9ecf0"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loader}
        />
        </div>
    )
}

export default Spinner