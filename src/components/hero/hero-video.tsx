"use-client";
import {useEffect, useRef, useState } from 'react';
import {useReducedMotion} from '@/hooks/use-reduced-motion';

export function HeroVideo(){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [canPlayVideo, setcanPlayVideo] =useState(true);
    const reduced = useReducedMotion();

    useEffect(() => {
        const conn = (navigator as any).connection;
        const saveData = conn?.saveData === true;
        const slowNetwork=
            conn?.effectiveType === '2g' || conn?.effectiveType === 'slow2g';
        if( reduced || saveData || slowNetwork){
            setcanPlayVideo(false);
            return;
        }

        const video = videoRef.current;
        if (!video)return;

        const tryPlay = () => {
            video.play().catch(() =>{
                setcanPlayVideo(false);
            });
        };
        tryPlay();

    }, [reduced]);

    return (
        <div className='absolute inset-0 -z-10 overflow-hidden'>
            {canPlayVideo ?(
                <video
                    ref ={videoRef}
                    className='h-full object-cover'
                    autoPlay
                    loop
                    playsInline
                    preload='metadata'
                    poster='/images/placeholder/hero2.jpg'
                    aria-hidden='true'
                    tabIndex={-1}>
                        <source src = "videos/placeholder/Video1.mp4"
                        type="video/mp4" />
                    </video>
            ) : (
                <div className = "h-full w-full bg-cover bg-center" 
                    style={{backgroundImage:"url(/images/placeholder/hero2.jpg)",}} aria-hidden="true" />
            )}

            <div aria-hidden className="absolute inset-0 bg-linear-to-b from-black/40 via black/30 to-bg-primary" />
            <div aria-hidden className= "absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />
        </div>
    );
}