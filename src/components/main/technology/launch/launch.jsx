import { Link } from "react-router-dom"; 
import ImgLaunch from "../technology-assets/image-launch-vehicle-portrait.jpg"; 

const Launch = () => {
  return (
    <div className="launch-container">
      {/* Titre principal de la section avec le numéro de l'étape */}
      <h2>
        <span>03</span> Space launch 101
      </h2>
      <div className="launch__content-bx">
        <div className="content">
          {/* Barre de navigation avec les liens pour les autres sections */}
          <div className="content__indicator">
            <Link to="/technology/launch">1</Link> {/* Lien vers la première section */}
            <Link to="/technology/spaceport">2</Link> {/* Lien vers la deuxième section */}
            <Link to="/technology/capsule">3</Link> {/* Lien vers la page actuelle */}
          </div>
          <div className="content__details">
            {/* Titre secondaire pour la section du véhicule de lancement */}
            <h3>
              <span>The terminology...</span>LAUNCH VEHICLE
            </h3>
            {/* Description du véhicule de lancement */}
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad! 
            </p>
          </div>
        </div>
        {/* Section contenant l'image du véhicule de lancement */}
        <div className="img-bx">
          <img src={ImgLaunch} alt="Launch Vehicle" /> {/* Image du véhicule de lancement */}
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Launch pour l'utiliser ailleurs dans l'application
export default Launch;
