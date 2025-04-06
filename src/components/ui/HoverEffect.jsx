import { clsx } from "clsx";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const items = [
    {
        title: "HTML",
        description:
            "HTML is the standard markup language for Web pages.",
        link: "https://www.w3schools.com/html/",
    },
    {
        title: "CSS",
        description:
            "CSS is the language we use to style a Web page.",
        link: "https://www.w3schools.com/Css/",
    },
    {
        title: "JS",
        description:
            "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
        link: "https://www.w3schools.com/Js/",
    },
    {
        title: "ReactJs",
        description:
            "The library for web and native user interfaces",
        link: "https://react.dev/",
    },
    {
        title: "GaminiAI",
        description:
            "To use the Gemini API, you need an API key. You can create a key with a few clicks in Google AI Studio.",
        link: "https://ai.google.dev/gemini-api/docs/api-key",
    },
    {
        title: "Aceternity UI",
        description:
            "Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
        link: "https://ui.aceternity.com/",
    },
];

export const HoverEffect = ({
    className
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={clsx("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-400/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }} />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        <div
            className={clsx(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-800 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children
}) => {
    return (
        <h4 className={clsx("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children
}) => {
    return (
        <p
            className={clsx("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
};
