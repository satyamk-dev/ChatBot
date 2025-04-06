"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";



const testimonials = [
    {
        quote:
            "Our Chairman, N.L. Khetan Sir, is a guiding force and a visionary leader, whose dedication and foresight have been instrumental in shaping the institution's path to success.",
        name: "N.L. Khetan Sir",
        designation: "AITS Chairman",
        src: "teacher/chairMan.png",
    },
    {
        quote:
            "As Director of AITS Udaipur since 2009, Hemant Dhabhai spearheaded the institute's NAAC accreditation. He has supervised over 16 M.Tech scholars and holds four patents. With over 20 years of experience.",
        name: "Hemmant Dhabhai",
        designation: "AITS Director",
        src: "teacher/director.png",
    },
    {
        quote:
            "Head of Department, is a visionary leader whose deep expertise and guidance continually inspire both faculty and students towards academic and professional excellence.",
        name: "Vinayak Metha",
        designation: "HOD(Computer Science)",
        src: "teacher/vinayak.png",
    },
    {
        quote:
            "Dedicated and experienced educator, known for her innovative teaching methods and commitment to student success",
        name: "Teena Rathore",
        designation: "AITS Professor",
        src: "teacher/teena.png",
    },
    {
        quote:
            "Inspiring Minds, Igniting Innovation, and Shaping the Future through Knowledge and Research",
        name: "Dipanshu Metha",
        designation: "AITS Professor",
        src: "teacher/deepanshu.jpg",
    },
    {
        quote:
            "A Guiding Force in Academic Excellence and Mentorship, Empowering the Next Generation of Thinkers.",
        name: "Raghvendra Sharma",
        designation: "AITS Professor",
        src: "teacher/mentor.png",
    },
    {
        quote:
            "A final year CSE student at AITS, driven by a passion for AI and technology, and committed to crafting impactful digital experiences",
        name: "Shabir Ansari",
        designation: "AITS Student",
        src: "developer/Shabir.png",
    },
];


export const AnimatedTestimonials = ({
    autoplay = false
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div
            className="mx-auto max-w-[80%] px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom">
                                    <img
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full max-w-[100%] rounded-3xl object-cover object-center" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col justify-between py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}>
                        <h3 className="text-2xl font-bold text-black dark:text-white">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block">
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                            <IconArrowLeft
                                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                            <IconArrowRight
                                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
