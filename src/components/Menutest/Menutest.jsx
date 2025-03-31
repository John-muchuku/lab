'use client'

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Menutest() {


 
  const outer = useRef(null);
  const inner = useRef(null);

  const manageMouseEnter = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

    
  return (
    <div className='h-screen flex item center justify-center px-6'>

    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="b">      
          <motion.div
     
     onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      className='cursor-pointer perspective-[80vw] origin-top relative last:border-b last:border-[#FD9620]'
     >
       <div
        ref={outer}
        className="absolute h-full w-full overflow-hidden pointer-events-none z-0"
      >
        <div
          ref={inner}
          className="absolute bg-[#FD9620] h-full w-full top-full z-0"
        ></div>
      </div>
    <AccordionTrigger className="z-1">Is it accessible?</AccordionTrigger>

    

        </motion.div> 
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>

      </AccordionItem>
      
    </Accordion>
    </div>
  )
}
