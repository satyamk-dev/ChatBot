import React from 'react'
import Footer from '../components/Footer'
import { AnimatedTestimonials } from '../components/ui/AnimatedTestimonials'

function AITS() {
    return (
        <>
            <div className=' flex justify-center flex-col items-center h-fit w-full  bg-neutral-800'>

                <div className='text-5xl text-white font-extrabold text-center md:text-6xl lg:text-7xl '>
                    <h1>AITS</h1>
                </div><br />


                <div className='max-w-[80%] text-sm h-fit md:max-w-[80%] md:text-xl lg:max-w-[80%] text-blue-100'>

                    <span className=' text-3xl text-white font-bold md:text-4xl lg:text-5xl '>About College</span><br /> <br />
                    Aravali Institute of Technical Studies, established in 2008, is an ISO9001: 2015 certified Engineering College that is committed to providing the best teaching, the best training, best placements, and best infrastructure for technical education viz. B.Tech. , M.Tech., MCA & Diploma (Engineering).

                    It is approved by AICTE, Govt. of India and Affiliated to Rajasthan Technical University, Kota (Raj). The Institution has Excellent imposing buildings with spacious Class Rooms, Highly Qualified and Experienced Faculties, Laboratories with the State of the Art equipment and other Excellent Infrastructure Facility.

                    since the inception of the institute, Aravali Institute of technical studies is different, ur students have been different, so our faculty. Our academic strength and outlook on our teaching and learning. The unique difference being that Aravali has been managed passionate academicians with the sole mission of making each and every student “Industry Ready”.

                    This difference has been acknowledged by students, parents and alumni, government, and industries since the inception of the institute. The contribution of Aravali Institute of Technical Studies in the field of technical education has not only been recognized at the state level but also at the national level too which speaks volumes about our strong academic heritage. The highly committed faculties and extensive industrial collaborations, great international connection, and state of art campus facilities.





                    <br /><br /> <br />
                </div>


                <AnimatedTestimonials />


            </div>


            <Footer />
        </>
    )
}

export default AITS