import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "./header-assets/logo.svg";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import "./header.css";

// Définition du composant Layer
const Layer = () => {
  // Déclaration des états pour afficher ou masquer la navigation mobile
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485); // Vérification si l'écran est mobile
  const location = useLocation(); // Utilisation de useLocation pour gérer les routes

  // Fonction pour alterner l'état du menu (ouvert/fermé)
  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };

  // useEffect pour surveiller la taille de la fenêtre et ajuster l'état isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 485); // Met à jour l'état isMobile en fonction de la taille de la fenêtre
    };

    window.addEventListener('resize', handleResize); // Ajout de l'écouteur d'événements pour la redimensionner
    return () => {
      window.removeEventListener('resize', handleResize); // Nettoyage de l'écouteur d'événements lors du démontage
    };
  }, []); // [] signifie que cet effet est exécuté uniquement lors du premier rendu

  // Fonction pour ajouter une classe 'active' au lien qui correspond à l'URL actuelle
  const getNavLinkClass = (path) => {
    const className = location.pathname.startsWith(path) ? 'active' : ''; // Si l'URL commence par le chemin donné
    return className; // Renvoie la classe correspondante
  };

  // Code de rendu
  return (
    <div className="layer">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {isMobile ? (
          <>
            {/* Affichage du bouton de menu, l'icône varie selon si le menu est ouvert ou fermé */}
            <img
              className="menuBtn"
              src={showNav ? close : menu}
              alt="Menu Toggle"
              onClick={menuToggle}
            />
            {/* Si showNav est vrai, afficher le menu mobile */}
            {showNav && (
              <nav>
                <ul>
                  <li>
                    <Link to="/home" onClick={menuToggle}>
                      <span>00</span> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination" onClick={menuToggle}>
                      <span>01</span> Destination
                    </Link>
                  </li>
                  <li>
                    <Link to="/crew" onClick={menuToggle}>
                      <span>02</span> Crew
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" onClick={menuToggle}>
                      <span>03</span> Technology
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul>
              <li className={getNavLinkClass('/home')}>
                <Link to="/home">
                  <span>00</span> Home
                </Link>
              </li>
              <li className={getNavLinkClass('/destination')}>
                <Link to="/destination">
                  <span>01</span> Destination
                </Link>
              </li>
              <li className={getNavLinkClass('/crew')}>
                <Link to="/crew">
                  <span>02</span> Crew
                </Link>
              </li>
              <li className={getNavLinkClass('/technology')}>
                <Link to="/technology">
                  <span>03</span> Technology
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Utilisation d'Outlet pour afficher le contenu des routes enfants */}
      <Outlet />
    </div>
  );
};

export default Layer; // Export du composant Layer pour qu'il soit utilisable ailleurs dans l'application

