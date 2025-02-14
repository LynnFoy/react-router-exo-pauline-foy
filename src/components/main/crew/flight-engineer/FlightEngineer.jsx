import React from "react";
import { Link } from "react-router-dom";
import Anousheh from "../crew-assets/image-anousheh-ansari.png"; 
import './FlightEnginner.css'; 

// Définition du composant FlightEngineer
const FlightEngineer = () => {
  return (
    <div className="flight-engineer-container">
      {/* Titre de la section */}
      <h2>
        <span>02 </span>meet your crew
      </h2>
      <div className="wrapper">
        <div className="content-bx">
          <div className="left">
            {/* Nom et titre du Flight Engineer */}
            <h3>
              <span>Flight Engineer</span>Anousheh Ansari
            </h3>
            {/* Description du Flight Engineer */}
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist, the
              first self-funded woman to fly to the ISS, and the first Iranian in
              space.
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
          {/* Image de la Flight Engineer */}
          <img src={Anousheh} alt="Anousheh Ansari" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres fichiers
export default FlightEngineer;
