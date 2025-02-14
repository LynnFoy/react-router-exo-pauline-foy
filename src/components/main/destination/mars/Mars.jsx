import marsImg from "../destination-assets/image-mars.png"; 
import { Link } from "react-router-dom"; 
import "./mars.css"; 

// Définition du composant Mars
const Mars = () => {
  return (
    <div className="mars-container">
      {/* Titre de la section avec le numéro de destination */}
      <h2>
        <span>01</span> Pick your destination
      </h2>
      <div className="destination__content-bx">
        <div className="left">
          {/* Image de Mars */}
          <img src={marsImg} alt="Mars" />
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
          {/* Titre de la destination Mars */}
          <h3>Mars</h3>
          {/* Description de la destination */}
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div className="more-details">
            <div className="left">
              {/* Informations sur la distance moyenne */}
              <span className="avg-distance">avg. distance</span>
              <span className="avg-distance__value">225 MIL. km</span>
            </div>

            <div className="right">
              {/* Informations sur le temps de voyage estimé */}
              <span className="travel-time">est. travel time</span>
              <span className="avg-distance__value">9 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs dans l'application
export default Mars;
