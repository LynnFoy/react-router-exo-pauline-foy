import europaImg from "../destination-assets/image-europa.png"; 
import { Link } from "react-router-dom"; 
import "./europa.css"; 

// Définition du composant Europa
const Europa = () => {
  return (
    <div className="europa-container">
      {/* Titre de la section avec le numéro de destination */}
      <h2>
        <span>01</span> Pick your destination
      </h2>
      <div className="destination__content-bx">
        <div className="left">
          {/* Image de Europa */}
          <img src={europaImg} alt="Europa" />
        </div>
        <div className="right">
          {/* Liste des destinations sous forme de liens */}
          <ul className="tab-bx">
            <li>
              <Link to="/destination/moon">Moon</Link> {/* Lien vers la page de la Lune */}
            </li>
            <li>
              <Link to="/destination/mars">Mars</Link> {/* Lien vers la page de Mars */}
            </li>
            <li>
              <Link to="/destination/europa">Europa</Link> {/* Lien vers la page d'Europa */}
            </li>
            <li>
              <Link to="/destination/titan">Titan</Link> {/* Lien vers la page de Titan */}
            </li>
          </ul>
          {/* Titre de la destination Europa */}
          <h3>Europa</h3>
          {/* Description de la destination */}
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="more-details">
            <div className="left">
              {/* Informations sur la distance moyenne */}
              <span className="avg-distance">avg. distance</span>
              <span className="avg-distance__value">628 MIL. km</span>
            </div>

            <div className="right">
              {/* Informations sur le temps de voyage estimé */}
              <span className="travel-time">est. travel time</span>
              <span className="avg-distance__value">3 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs
export default Europa;
