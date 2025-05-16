import React from 'react'
import StartBtn from '../components/StartBtn'
import { Animated01 } from './ui/Animated01'

function IntoTitle() {
    return (
        <>

            <div className=' flex justify-center items-center flex-col text-center bg-neutral-800 '>
                <div>
                    <h1 className='text-3xl text-white font-bold'>Hi... I'm  <span className='text-4xl font-bold text-fuchsia-600'>Genius</span>AI.</h1><br />
                    <h2 className='text-5xl text-white font-extrabold md:text-6xl lg:text-7xl'>Get answers. Find inspiration. Be more productive.</h2><br /><br />
                    <p className=' text-sm text-white md:text-md  lg:text-xl'>Free to use. Easy to try. Just ask and  <span className='text-xl font-bold text-fuchsia-600'>Genius</span>AI.  can help with writing, learning, brainstorming, and more.</p><br />
                    <StartBtn /> <br /><br />


                </div>

                <div>

                    <Animated01 />
                </div>
            </div >
        </>
    )
}

export default IntoTitle