import React, { useState } from 'react'
 import { Elements } from '../components/elements'
import '../App.css'
import { NavBar} from '../components/NavBar'
import { Proyecs } from '../proyects/Proyecs'
import { Contacto } from '../contacto/contacto'


export const Page = () => {
    const [Active, setActive] = useState(false)

  return (
    <div>
        <div className='app_main'>
            <h1 className='name'>David Duarte Allende</h1>
            <h2 className='front'>Front-end developer</h2>

            <h3 className='descripcion'>
              <span className="title-content">Desarrollador de software con experiencia en desarrollo web. </span>
              <span className="title-content title-secont">interesado en la optimización del producto, uso de buenas </span>
              <span className="title-content title-third">practicas en codigo, resposabilidad y trabajo en equipo. </span>
              <span className="title-content title-fourth">Interesado en aprender cada día más sobre el desarrollo web.</span>   
            </h3>
          
            <img 
            src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650032364/porfolio/menu-regular-24_l42ovc.png" 
            alt="" 
            className='menu '
            onClick={() => setActive(!Active)} 
        />
            <NavBar Acti={Active} />
          <h2 className='tecnologias'>Mis tecnologias</h2>
            <div className="example-container">
              <Elements key={0}/>
            </div>
            <div>
               <h2 className='proyectos'>Mis proyectos</h2>
               <Proyecs/>
            </div>
          
           
            <div className='line'></div>
            <div >
            
              <Contacto/>
            </div>
           
        
        </div>
    </div>
  )
}
