import styles from './style.module.scss'
import { motion } from 'framer-motion';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Linki({data, index}) {
    const { title,logo } = data;
    const outer = useRef(null);
    const inner = useRef(null);

    const manageMouseEnter = (e) => {
        const bounds = e.target.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.set(outer.current, {top: "-100%"})
            gsap.set(inner.current, {top: "100%"})
        }
        else{
            gsap.set(outer.current, {top: "100%"})
            gsap.set(inner.current, {top: "-100%"})
        }
        gsap.to(outer.current, {top: "0%", duration: 0.3})
        gsap.to(inner.current, {top: "0%",  duration: 0.3})
    }

    const manageMouseLeave = (e) => {
        const bounds = e.target.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.to(outer.current, {top: "-100%", duration: 0.3})
            gsap.to(inner.current, {top: "100%",  duration: 0.3})
        }
        else{
            gsap.to(outer.current, {top: "100%", duration: 0.3})
            gsap.to(inner.current, {top: "-100%",  duration: 0.3})
        }
    }

    return (
   

         <>
       


        <motion.div 
          onMouseEnter={ (e) => {manageMouseEnter(e)}} 
          onMouseLeave={(e) => {manageMouseLeave(e)}} 
         
          custom={index} 
          
          className={styles.el}>

            <div ref={outer} className={styles.outer}>
                <div ref={inner} className={styles.inner}>                   
                </div>
            </div>

 
          <div className="w-full flex items-center justify-between px-4 md:px-6 z-0">
      <div className="flex-shrink-0">
        <Link href="/">{title}</Link>
      </div>
      
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image 
          src={`/images/${logo}`}
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
          </div>



           




        </motion.div>
        </>
      
    )
}
