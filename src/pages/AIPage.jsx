import React from 'react'
import InputOutput from '../components/InputOutput'

function AIPage() {
    return (
        <>


            <div className='text-5xl text-white font-extrabold text-center md:text-6xl lg:text-7xl '>
                <h1>ChatBot</h1>
            </div>


            <div className='flex justify-center items-center flex-col gap-5 w-full h-fit py-20  bg-neutral-800  '>
                <InputOutput />
            </div>


        </>
    )
}

export default AIPage