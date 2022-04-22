import React, { useRef }from 'react'
import { motion } from "framer-motion";
import '../App.css'
export const Elements = () => {
    const constraintsRef = useRef(null);

  return (
    <>  
        <motion.div className="drag-area" ref={constraintsRef} />
   
        <motion.div drag dragConstraints={constraintsRef}  className='html'/>
        <motion.div drag dragConstraints={constraintsRef}  className='css'/>
         <motion.div drag dragConstraints={constraintsRef}  className='java'/>
         <motion.div drag dragConstraints={constraintsRef}  className='type'/>
         <motion.div drag dragConstraints={constraintsRef}  className='node'/>
          <motion.div drag dragConstraints={constraintsRef}  className='react'/>
          <motion.div drag dragConstraints={constraintsRef}  className='mongo'/>
          <motion.div drag dragConstraints={constraintsRef}  className='git'/>


    </>
  )
}
