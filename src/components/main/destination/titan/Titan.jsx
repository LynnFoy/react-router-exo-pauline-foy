import titanImg from "../destination-assets/image-titan.png"; 
import { Link } from "react-router-dom"; 
import "./titan.css"; 

// Définition du composant Titan
const Titan = () => {
    return (
        <div className="titan-container">
            {/* Titre de la section avec le numéro de destination */}
            <h2>
                <span>01</span> Pick your destination
            </h2>
            <div className="destination__content-bx">
                <div className="left">
                    {/* Image de Titan */}
                    <img src={titanImg} alt="Titan" />
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
                    {/* Titre de la destination Titan */}
                    <h3>Titan</h3>
                    {/* Description de la destination */}
                    <p>
                        The only moon known to have a dense atmosphere other than Earth,
                        Titan is a home away from home (just a few hundred degrees
                        colder!). As a bonus, you get striking views of the Rings of
                        Saturn.
                    </p>
                    <div className="more-details">
                        <div className="left">
                            {/* Informations sur la distance moyenne */}
                            <span className="avg-distance">avg. distance</span>
                            <span className="avg-distance__value">1.6 BIL. km</span>
                        </div>

                        <div className="right">
                            {/* Informations sur le temps de voyage estimé */}
                            <span className="travel-time">est. travel time</span>
                            <span className="avg-distance__value">7 years</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exportation du composant pour l'utiliser ailleurs dans l'application
export default Titan;
