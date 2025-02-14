import { useNavigate } from "react-router-dom"; 
import "./home.css"; 

const Home = () => {
  const navigate = useNavigate(); 

  // Fonction pour rediriger l'utilisateur lorsqu'il clique sur le bouton
  const handleExploreClick = () => {
    navigate("/destination"); 
  };

  return (
    // Div principale pour la section 'home'
    <div className="home">
      {/* Conteneur principal de la section home */}
      <div className="home-container">
        {/* La section 'left' contient le texte principal (titre et description) */}
        <div className="left">
          <h1>
            <span>So, you want to travel to</span>Space
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        
        {/* La section 'right' contient le bouton pour explorer */}
        <div className="right">
          {/* Le bouton 'Explore' qui déclenche la redirection */}
          <button className="explore" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
