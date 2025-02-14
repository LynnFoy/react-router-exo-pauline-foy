import { Link } from "react-router-dom"; 
import ImgCapsule from "../technology-assets/image-space-capsule-portrait.jpg"; 

const Capsule = () => {
  return (
    <div className="capsule-container">
      {/* Titre principal de la section avec le numéro de l'étape */}
      <h2>
        <span>03</span> Space launch 101
      </h2>
      <div className="capsule__content-bx">
        <div className="content">
          {/* Barre de navigation avec les liens pour les autres sections */}
          <div className="content__indicator">
            <Link to="/technology/launch">1</Link> {/* Lien vers la première section */}
            <Link to="/technology/spaceport">2</Link> {/* Lien vers la deuxième section */}
            <Link to="/technology/capsule">3</Link> {/* Lien vers la page actuelle */}
          </div>
          <div className="content__details">
            {/* Titre secondaire pour la section de la capsule */}
            <h3>
              <span>The terminology...</span>space capsule
            </h3>
            {/* Description de la capsule */}
            <p>
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
        </div>
        {/* Section contenant l'image de la capsule */}
        <div className="img-bx">
          <img src={ImgCapsule} alt="Space Capsule" /> {/* Image de la capsule */}
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Capsule pour l'utiliser ailleurs dans l'application
export default Capsule;
