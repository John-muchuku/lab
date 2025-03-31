'use client'

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function LinkItem({ data, index }) {
  const { title } = data;
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
    <motion.div
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      className="w-full border-t border-[#FD9620] flex cursor-pointer perspective-[80vw] origin-top relative last:border-b last:border-[#FD9620]"
    >
      {/* Animated overlay elements */}
      <div
        ref={outer}
        className="absolute h-full w-full overflow-hidden pointer-events-none"
      >
        <div
          ref={inner}
          className="absolute bg-[#FD9620] h-full w-full top-full"
        ></div>
      </div>

      {/* Visible content */}
      <div className="w-full flex items-center justify-between px-4 md:px-6 z-0">
        <div className="flex-shrink-0">
          <Link
            href="/"
            aria-label={`Link to ${title}`}
            className="uppercase text-[7vw] leading-[8.2vw] font-semibold text-[#013121] font-home"
          >
            {title}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}