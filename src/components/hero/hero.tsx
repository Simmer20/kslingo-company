"use client";

import Link from "next/link";
import {motion} from "motion/react";
import { type Variants } from "motion/react";
import {useReducedMotion} from "@/hooks/use-reduced-motion";
import {Button} from "@/components/ui/button";
import { HeroVideo } from "./hero-video";

export function Hero (){
    const reduced = useReducedMotion();
    const container : Variants={
        hidden: {},
        show: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1},
        },
    };

    const child : Variants ={
        hidden: {opacity: 0, y:24},
        show: {
            opacity: 1, y: 0, transition: {duration:0.8, ease: [0.22, 1, -.36, 1]},
        },
    };
    const content = (
        <div className= 'relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10'>
            <div className="max-w-3xl">
                <motion.p variants={child} className="eyebrow mb-6 text-white/80">Beyond Word. Beyond Barriers.</motion.p>
                <motion.h1
                    variants={child} className="font-heading text-5xl leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
                        Everyone deserves to be understood
                </motion.h1>
                <motion.p
                    variants={child} className="mt-10 flex flex-wrap items-center gap-4">
                    We@apos;re using technology to make Kenya Sign Language learning more accesible, engaging and inclusive.
                </motion.p>
                <motion.div variants={child} className="mt-10 flex flex-wrap items-center gap-4">
                    <Button href="#platform" size="lg" variant="primary">Discover KSLingo</Button>
                    <Button href="#story" size="lg" variant="ghost">Explore our Story</Button>
                </motion.div>
            </div>
        </div>
    );
    return (
        <section id="top" className="relative islate flex min-h-screen w-full items-center overflow-hidden">
            <HeroVideo/>
            {reduced ? (content): (
                <motion.div className="w-full" variants={container} initial="hidden" animate= "show">
                    {content}
                </motion.div>
            )}
            {/*Scroll Indicator*/}
            {!reduced && (
                <motion.div aria-hidden className= "absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70" initial={{opacity:0}} animate= {{opacity:1}} transition={{delay:1.4, duration:0.8}}>
                    <ScrollHint />
                </motion.div>
                )}
                {/*Screen-Reader*/}
                <a href="#platform" className="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-1/2 focus:-translate-x-1/2 focus:rounded-full focus:bg-white/90 focus:py-2 focus:text-black">
                Skip Hero</a>
        </section>
    );
}

function ScrollHint(){
    return (
        <motion.svg width="28" height="44" viewBox="0 0 28 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" animate={{y:[0,8,0]}} transition={{duration:2.2, repeat:Infinity, ease:"easeInOut"}}>
            <rect x="1" y="1" width="26" height="42" rx="13" />
            <circle cx="14" cy="12" r="3" fill="currentColor" stroke="none" />
        </motion.svg>
    );
}