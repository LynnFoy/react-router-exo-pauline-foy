import React from "react";
import { Link } from "react-router-dom";
import douglas from "../crew-assets/image-douglas-hurley.png"; 
import './Commander.css'; 

// Définition du composant Commander
const Commander = () => {
  return (
    <div className="commander-container">
      {/* Titre de la section */}
      <h2>
        <span>02 </span>meet your crew
      </h2>
      <div className="wrapper">
        <div className="content-bx">
          <div className="left">
            {/* Nom et titre du commandant */}
            <h3>
              <span>Commander</span>Douglas Hurley
            </h3>
            {/* Description du commandant */}
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="indicator">
            {/* Liens vers d'autres membres de l'équipage */}
            <Link to="/crew/commander"></Link>
            <Link to="/crew/mission-specialist"></Link>
            <Link to="/crew/flight-engineer"></Link>
            <Link to="/crew/pilot"></Link>
          </div>
        </div>
        <div className="right">
          {/* Image du commandant */}
          <img src={douglas} alt="Douglas Hurley" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres fichiers
export default Commander;
