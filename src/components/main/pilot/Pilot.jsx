import { Link } from "react-router-dom";
import Victor from "../crew-assets/image-victor-glover.png";

const Pilot = () => {
  return (
    <div className="pilot-container">
       <h2>
          <span>02 </span>meet your crew
        </h2>
        <div className="wrapper">
      <div className="content-bx">
        <div className="left">
          <h3>
            <span>Pilot</span>Victor Glover
          </h3>
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </div>
        <div className="indicator">
          <Link to="/crew/commander"></Link>
          <Link to="/crew/mission-specialist"></Link>
          <Link to="/crew/flight-engineer"></Link>
          <Link to="/crew/pilot"></Link>
        </div>
      </div>
      <div className="right">
        <img src={Victor} />
      </div>
      </div>
    </div>
  );
};

export default Pilot;
