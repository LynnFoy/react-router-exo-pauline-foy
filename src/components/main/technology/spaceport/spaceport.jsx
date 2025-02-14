import { Link } from "react-router-dom"; 
import ImgSpaceport from "../technology-assets/image-spaceport-portrait.jpg"; 

const Spaceport = () => {
  return (
    <div className="spaceport-container">
      {/* Titre principal de la section avec le numéro de l'étape */}
      <h2>
        <span>03</span> Space launch 101
      </h2>
      <div className="spaceport__content-bx">
        <div className="content">
          {/* Barre de navigation avec les liens pour les autres sections */}
          <div className="content__indicator">
            <Link to="/technology/launch">1</Link> {/* Lien vers la première section */}
            <Link to="/technology/spaceport">2</Link> {/* Lien vers la page actuelle */}
            <Link to="/technology/capsule">3</Link> {/* Lien vers la troisième section */}
          </div>
          <div className="content__details">
            {/* Titre secondaire pour la section du spaceport */}
            <h3>
              <span>The terminology...</span>spaceport
            </h3>
            {/* Description du spaceport */}
            <p>
              A spaceport or cosmodrome is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth’s rotation for
              launch.
            </p>
          </div>
        </div>
        {/* Section contenant l'image du spaceport */}
        <div className="img-bx">
          <img src={ImgSpaceport} alt="Spaceport" /> {/* Image du spaceport */}
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Spaceport pour l'utiliser ailleurs dans l'application
export default Spaceport;
