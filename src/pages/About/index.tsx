import { Link } from "react-router-dom";
import "./styles.scss";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-about">This is About Page</p>
        <Link className="App-link" to="/">
          Go To Home
        </Link>
      </header>
    </div>
  );
}

export default About;
