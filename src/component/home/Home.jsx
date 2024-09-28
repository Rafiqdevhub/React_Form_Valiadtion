import { Link } from "react-router-dom";
import "./Home.css"; // Importing the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>Please choose an option below:</p>
      <div className="button-container">
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
