import React from 'react'
import { FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const SectionHeading = ({element, elementData, heading,highlightedHeading ,afterText ,className}) => {
  return (
    <>
    
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`relative z-10 flex flex-col items-center gap-5 text-center ${className? className :" " }`}
      >
        <motion.span
          variants={item}
          className="group flex items-center justify-center gap-2 rounded-2xl border border-amber-300 px-6 py-3 transition-shadow duration-150 hover:shadow-sm hover:shadow-amber-200"
        >
          {element && element}{" "}{elementData && elementData}
        </motion.span>
        <motion.span
          variants={item}
          className="text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          {heading && heading} {" "}<span className="text-amber-400">{highlightedHeading && highlightedHeading}</span> {afterText && afterText}
        </motion.span>
      </motion.div>
    </>
  )
}

export default SectionHeading