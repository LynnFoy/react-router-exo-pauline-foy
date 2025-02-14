import moonImg from "../destination-assets/image-moon.png"; 
import "./moon.css";
import "../destination.css"; 
import { Link } from "react-router-dom"; 

// Définition du composant Moon
const Moon = () => {
  return(
    <div className="moon-container">
      {/* Titre de la section avec le numéro de destination */}
      <h2>
        <span>01</span> Pick your destination
      </h2>
      <div className="destination__content-bx">
        <div className="left">
          {/* Image de la Lune */}
          <img src={moonImg} alt="Moon" />
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
          {/* Titre de la destination Lune */}
          <h3>Moon</h3>
          {/* Description de la destination */}
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2
            and Apollo 11 landing sites.
          </p>
          <div className="more-details">
            <div className="left">
              {/* Informations sur la distance moyenne */}
              <span className="avg-distance">avg. distance</span>
              <span className="avg-distance__value">384,400km</span>
            </div>

            <div className="right">
              {/* Informations sur le temps de voyage estimé */}
              <span className="travel-time">est. travel time</span>
              <span className="avg-distance__value">3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs dans l'application
export default Moon;
