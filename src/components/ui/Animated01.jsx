import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";


const items = [
    {
        id: 1,
        name: "Satyam Kumar",
        image: "developer/Satyam.jpg",
        designation: "ChatBot Developer(Student)",

    },

    {
        id: 2,
        name: "Raghvendra Sharma",
        image: "teacher/mentor.png",
        designation: "AITS Professor(CSE)",
    },
    {
        id: 3,
        name: "Dipanshu Mehta",
        image: "teacher/deepanshu.jpg",
        designation: "AITS Professor(CSE)",
    },
    {
        id: 4,
        name: "Teena Rathore",
        image: "teacher/teena2.png",
        designation: "AITS Professor(CSE)",
    },
    {
        id: 5,
        name: "Vinayak Mehta",
        image: "teacher/vinayak.png",
        designation: "AITS HOD(CSE)",
    },
    {
        id: 6,
        name: "Hemmant Dhabhai",
        image: "teacher/director.png",
        designation: "AITS Director",

    },
];

export const Animated01 = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);
    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    return (
        <div className=" flex group relative ">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX,
                                    rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                            >
                                {/* Decorative gradient lines */}
                                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

                                {/* Tooltip text */}
                                <div className="relative z-30 text-base font-bold text-white">
                                    {item.name}
                                </div>
                                <div className="text-xs text-white">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="relative m-0 h-10 w-10 rounded-full border-2 border-white object-cover object-top p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
                    />

                </div>
            ))}
        </div>
    );
};