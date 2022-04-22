import React from "react";
import { Image } from "./image";
import { motion } from "framer-motion";
import "./projects.css";

export const Proyecs = () => {
  return (
    <div>
      <div className="mapbox_main">
        <div className="projects-main">
          <Image
            image={
              "https://res.cloudinary.com/dsii7wbi4/image/upload/v1650567768/porfolio/Captura_de_pantalla_2022-04-20_115627_ydmpsa.png"
            }
          />
        </div>
        <div className="mapbox">
          <a href="https://maps-app-da.netlify.app/" target="_blank"><span className="span_mapbox">React-mapbox </span></a>
          
          <div className="github_mubi">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="https://github.com/anonimoxdver/react-mapbox-DA" target="_blank">
                <img
                  src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650219561/porfolio/bxl-github_icdebr.svg"
                  alt=""
                  className="gith"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mubi_main">
        <div className="image2">
          <Image
            image={
              "https://res.cloudinary.com/dsii7wbi4/image/upload/v1650234997/porfolio/Captura_de_pantalla_2022-04-17_173209_zi7ilx.png"
            }
          />
          <div className="mubi">
            <a href="https://mubiclone-da.netlify.app/" target="_blank"><span className="span_mubi">Mubi clone </span></a>
            
              <div className="github_mubi">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                  <a href="https://github.com/anonimoxdver/MubiClone" target="_blank">
                    <img
                      src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650219561/porfolio/bxl-github_icdebr.svg"
                      alt=""
                      className="gith"
                    />
                  </a>
                </motion.div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
