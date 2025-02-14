import { Link } from 'react-router-dom';
import './ErrorMsg.css';  

const ErrorMsg = () => {
  return (
    <section className="error-message">
      <h2>
      ⚠️ 404 Error ⚠️ <br /> Page not found 
      </h2>
      <Link to="/home">Back to home</Link>
    </section>
  );
};

export default ErrorMsg;
