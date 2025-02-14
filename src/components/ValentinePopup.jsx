import React, { useState } from "react";  
import "./ValentinePopup.css";  

// Composant principal du pop-up
const ValentinePopup = () => {
  // Déclaration des états (useState) pour gérer les variables de l'application
  const [isOpen, setIsOpen] = useState(true);  // Gère si le pop-up est ouvert ou fermé
  const [selectedPlanet, setSelectedPlanet] = useState("Lune");  // Stocke la planète sélectionnée par l'utilisateur
  const [message, setMessage] = useState("");  // Message à afficher en fonction de la planète sélectionnée
  const [planetClass, setPlanetClass] = useState("lune"); // Classe par défaut associée à la planète, pour le style

  // Fonction qui se déclenche lors de la sélection d'une planète
  const handleSelection = () => {
    // Dictionnaire contenant les messages personnalisés pour chaque planète
    const messages = {
      Lune: "Sous la lumière argentée de la Lune, notre amour brillera éternellement.",
      Mars: "Sur Mars, où les couchers de soleil sont rouges, notre passion ne fera que s'intensifier.",
      Europa: "Europa, la lune glacée de Jupiter, un paradis hivernal où l’on peut patiner ou se blottir au chaud, main dans la main.",
      Titan: "Titan, la lune mystérieuse aux vues splendides des anneaux de Saturne, un havre de paix sous une atmosphère envoûtante."
    };

    // Dictionnaire des classes CSS associées à chaque planète
    const planetClasses = {
      Lune: "lune",
      Mars: "mars",
      Europa: "europa",
      Titan: "titan"
    };

    // Mise à jour de l'état 'message' avec le message associé à la planète sélectionnée
    setMessage(messages[selectedPlanet]);
    // Mise à jour de l'état 'planetClass' avec la classe CSS associée à la planète sélectionnée
    setPlanetClass(planetClasses[selectedPlanet]);
  };

  // Si le pop-up est fermé, on ne retourne rien (pas d'affichage)
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Titre principal du pop-up */}
        <h2>✮Embarquez pour un voyage romantique✮</h2>

        {/* Sous-titre avec une question */}
        <p>ꨄ Où souhaitez-vous partir avec votre moitié ? ꨄ</p>
        
        {/* Sélecteur de planètes */}
        <select 
          value={selectedPlanet}  // Valeur du sélecteur liée à l'état 'selectedPlanet'
          onChange={(e) => setSelectedPlanet(e.target.value)}  // Met à jour l'état lorsque l'utilisateur sélectionne une option
        >
          <option value="Lune">🌒 La Lune</option>  
          <option value="Mars">🔴 Mars</option>  
          <option value="Europa">❄️ Europa</option>  
          <option value="Titan">🪐 Titan</option>  
        </select>

        {/* Bouton pour valider la sélection de la destination */}
        <button onClick={handleSelection}>Valider la destination</button>

        {/* Si un message est sélectionné, il sera affiché avec la classe dynamique associée */}
        {message && <p className={`planet-message ${planetClass}`}>{message}</p>}

        {/* Bouton pour fermer le pop-up */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>Fermer</button>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs dans l'application
export default ValentinePopup;
