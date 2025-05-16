import React from 'react'
import { HoverEffect } from '../components/ui/HoverEffect'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <div className='text-5xl text-white font-extrabold text-center md:text-6xl lg:text-7xl'>
                <h1>About</h1>
            </div><br /> <br />
            <div className=' flex justify-center h-fit w-full  bg-neutral-800'>
                <div className='max-w-[80%] text-sm h-fit md:max-w-[80%] md:text-xl lg:max-w-[80%] text-blue-100'>



                    <span className='text-3xl text-white font-bold md:text-4xl lg:text-5xl '>About the Creator</span><br />
                    GeniusAI is the brainchild of Satyam, a B.Tech Computer Science Engineering (CSE) final-year student with a passion for artificial intelligence, machine learning, and web development. With a strong foundation in programming and a keen interest in AI-driven solutions, Satyam developed GeniusAI to bridge the gap between human interaction and intelligent automation.

                    His expertise in React.js, JavaScript, and AI technologies has enabled him to build a chatbot that is not only efficient and scalable but also adaptable to various industries. Through GeniusAI, Satyam aims to revolutionize customer engagement and streamline digital interactions for businesses and users alike. <br /><br />

                    <HoverEffect /><br />

                    <span className='text-xl text-white font-bold md:text-2xl lg:text-3xl'>Project GeniusAI</span><br />
                    In today’s fast-paced digital world, communication is key, and instant responses are essential. That’s where GeniusAI comes in—an advanced, AI-powered chatbot designed to provide seamless, engaging, and intelligent interactions. Whether it’s assisting customers, answering queries, or offering personalized recommendations, GeniusAI ensures real-time, meaningful conversations.<br /><br />


                    <span className='text-xl text-white font-bold md:text-2xl lg:text-3xl'>Why Choose GeniusAI?</span><br />
                    Built with React.js and JavaScript, GeniusAI is optimized for speed, efficiency, and an intuitive user experience. It integrates effortlessly into websites and applications, delivering interactive and dynamic responses without any delays. Powered by artificial intelligence and natural language processing (NLP), GeniusAI understands and responds in a way that feels natural and human-like.<br /><br />


                    <span className='text-xl text-white font-bold md:text-2xl lg:text-3xl'>Key Features of GeniusAI:</span><br />
                    ✅ Instant Support – Get quick answers to common queries without waiting. <br />

                    ✅ User-Friendly & Smart – Designed for effortless, natural conversations. <br />

                    ✅ Customizable & Scalable – Tailor GeniusAI to your business needs as you grow. <br />

                    ✅ Seamless Integration – Easily integrates into websites, apps, and other platforms. <br />

                    ✅ 24/7 Availability – Always active, providing support anytime, anywhere.<br /><br />


                    <span className='text-xl text-white font-bold md:text-2xl lg:text-3xl'>How GeniusAI Works</span><br />
                    Using a combination of AI, machine learning, and pre-defined logic, GeniusAI processes user inputs and delivers smart, accurate responses. It can handle:

                    FAQs and customer support queries

                    Booking and appointment scheduling

                    Feedback collection and data analysis

                    Personalized recommendations and assistance

                    With advanced capabilities like voice recognition, sentiment analysis, and multilingual support, GeniusAI is more than just a chatbot—it’s a powerful virtual assistant.<br /><br />


                    <span className='text-xl text-white font-bold md:text-2xl lg:text-3xl'>Who Can Benefit from GeniusAI?</span><br />
                    GeniusAI is perfect for various industries, including:

                    ✔ E-commerce & Retail – Product recommendations, order processing, and customer support.

                    ✔ Customer Service – Automate responses and improve user experience.

                    ✔ Healthcare & Telemedicine – Help with scheduling, FAQs, and patient assistance.

                    ✔ Education & E-learning – Course guidance, scheduling, and interactive learning.

                    ✔ Finance & Banking – Quick insights into accounts, transactions, and financial queries.

                    ✔ And many more!<br /><br />


                    <span className='text-xl text-white font-bold md:text-2xl lg:text-3xl'>Experience the Future of AI-Powered Conversations</span><br />
                    At GeniusAI, we believe in technology’s ability to enhance communication and simplify tasks. Our chatbot is not just a tool—it’s an intelligent companion that transforms digital interactions.

                    Join the AI revolution with GeniusAI today and make every conversation smarter, faster, and more efficient! <br /> <br /> <br />

                </div>
            </div>

            <Footer />
        </>
    )
}

export default About