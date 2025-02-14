import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

// Importation des composants nécessaires
import Layer from "./components/header/layer";
import Home from "./components/main/home/Home";
import Crew from "./components/main/crew/Crew";
import Destination from "./components/main/destination/Destination";
import Technology from "./components/main/technology/Technology";

// Importation des sous-pages spécifiques à chaque destination
import Moon from "./components/main/destination/moon/Moon";
import Mars from "./components/main/destination/mars/Mars";
import Europa from "./components/main/destination/europa/Europa";
import Titan from "./components/main/destination/titan/Titan";

// Importation des sous-pages spécifiques à chaque membre d'équipage
import Commander from "./components/main/crew/commander/commander";
import MissionSpecialist from "./components/main/crew/mission-specialist/MissionSpecialist";
import FlightEngineer from "./components/main/crew/flight-engineer/FlightEngineer";
import Pilot from "./components/main/crew/pilot/Pilot";

// Importation des sous-pages spécifiques à chaque technologie
import Launch from "./components/main/technology/launch/launch";
import Spaceport from "./components/main/technology/spaceport/spaceport";
import Capsule from "./components/main/technology/capsule/capsule";

// Importation du composant d'erreur 404
import ErrorMsg from "./components/error/ErrorMsg";

const App = () => {
  return (
    <>
      <Routes>
        {/* Route principale avec la structure de base */}
        <Route path="/" element={<Layer />}>
          
          {/* Route d'accueil avec redirection vers la page "home" */}
          <Route index element={<Navigate to="home" />} />
          
          {/* Routes pour la page d'accueil */}
          <Route path="/home" element={<Home />} />
          
          {/* Routes pour les destinations */}
          <Route path="/destination/*" element={<Destination />}>
            <Route index element={<Navigate to="moon" />} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>

          {/* Routes pour l'équipage */}
          <Route path="/crew/*" element={<Crew />}>
            <Route index element={<Navigate to="commander" />} />
            <Route path="commander" element={<Commander />} />
            <Route path="mission-specialist" element={<MissionSpecialist />} />
            <Route path="flight-engineer" element={<FlightEngineer />} />
            <Route path="pilot" element={<Pilot />} />
          </Route>

          {/* Routes pour les technologies */}
          <Route path="/technology" element={<Technology />}>
            <Route index element={<Navigate to="launch" />} />
            <Route path="launch" element={<Launch />} />
            <Route path="spaceport" element={<Spaceport />} />
            <Route path="capsule" element={<Capsule />} />
          </Route>
        </Route>

        {/* Route pour afficher la page d'erreur (404) sur toute autre route non définie */}
        <Route path="*" element={<ErrorMsg />} />
      </Routes>
    </>
  );
}

export default App;
