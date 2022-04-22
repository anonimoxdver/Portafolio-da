import React from 'react'
import { motion} from 'framer-motion'
import '../App.css'
import pdf from '../portafolio/cv.pdf'
export const NavBar = ({Acti}) => {
  return (
    <div className={Acti ?'Photo_main active': 'Photo_main '}>

     <div className=''>
      <img 
        src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1649802582/porfolio/tumblr_c4cd7d276ca0112aeee05f60f9e53fba_80f1ce6c_400_roaxua.png" 
        alt=""
        className='photo' 
        />
        
     </div>
     <div className="icons">
            <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <a href="https://www.linkedin.com/in/david-duarte-5968b61ba/">
                 <img
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650219372/porfolio/bxl-linkedin-square_xm32fg.svg" 
          alt=""
          className='linkedin'
            
        />
       </a>
       </motion.div>
       <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <a href="https://github.com/anonimoxdver">
           <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650219561/porfolio/bxl-github_icdebr.svg" alt=""  className='github'/>
        </a>
       
       </motion.div>

     </div>
    
       <a href={pdf} className='buttoncv' download='descarga' >Descarga mi CV</a>
   
    </div>
  )
}
