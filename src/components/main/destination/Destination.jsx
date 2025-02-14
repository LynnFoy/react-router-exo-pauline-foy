import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ValentinePopup from "../../../components/ValentinePopup"; 
import "./Destination.css"; 

const Destination = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Gère l'affichage du pop-up

  return (
    <div className="destination">
      {isPopupOpen && <ValentinePopup onClose={() => setIsPopupOpen(false)} />} {/* Affiche le pop-up si isPopupOpen est vrai */}

      <button className="heart-button" onClick={() => setIsPopupOpen(true)}> ˚🩷˚ </button>

      <Outlet />
    </div>
  );
};

export default Destination;
