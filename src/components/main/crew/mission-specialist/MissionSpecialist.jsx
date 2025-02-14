import React from "react";
import { Link } from "react-router-dom";
import Mark from "../crew-assets/image-mark-shuttleworth.png";  
import './MissionSpecialist.css';  

// Définition du composant MissionSpecialist
const MissionSpecialist = () => {
  return (
    <div className="mission-specialist-container">
      {/* Titre de la section */}
      <h2>
        <span>02 </span>meet your crew
      </h2>
      <div className="wrapper">
        <div className="content-bx">
          <div className="left">
            {/* Nom et titre du Mission Specialist */}
            <h3>
              <span>Mission Specialist</span>MARK SHUTTLEWORTH
            </h3>
            {/* Description du Mission Specialist */}
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system. Shuttleworth
              became the first South African to travel to space as a space
              tourist.
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
          {/* Image du Mission Specialist */}
          <img src={Mark} alt="Mark Shuttleworth" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres fichiers
export default MissionSpecialist;
