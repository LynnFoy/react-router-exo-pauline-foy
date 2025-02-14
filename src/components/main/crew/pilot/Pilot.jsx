import React from "react";
import { Link } from "react-router-dom";
import Victor from "../crew-assets/image-victor-glover.png"; 
import './Pilot.css'; 

// Définition du composant Pilot
const Pilot = () => {
  return (
    <div className="pilot-container">
      {/* Titre de la section */}
      <h2>
        <span>02 </span>meet your crew
      </h2>
      <div className="wrapper">
        <div className="content-bx">
          <div className="left">
            {/* Nom et titre du Pilote */}
            <h3>
              <span>Pilot</span>Victor Glover
            </h3>
            {/* Description du Pilote */}
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18. He was a crew member of Expedition
              64, and served as a station systems flight engineer.
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
          {/* Image du Pilote */}
          <img src={Victor} alt="Victor Glover" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres fichiers
export default Pilot;
