import "../styles/header.css";
import swift from "../images/swift.svg";
import kotlin from "../images/koltin.png";
import java from "../images/java.svg";
import react from "../images/react.png";
import photo from "../images/me.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Header = () => {
  return (
    <Router>
      <div className="main-container" id="home">
        <main>
          <section className="section-container">
            <div>
              <h1>Italo Melo</h1>
              <div className="text-container">
                <p>Hi! I'm a Mobile Developer based in Recife, Brazil.</p>
                <div>
                  <Link to="https://www.linkedin.com/in/italocmelo/">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link to="https://github.com/italord0">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://x.com/olemolati">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="https://medium.com/@italord.melo">
                    <i className="fa-brands fa-medium"></i>
                  </Link>
                </div>
              </div>
            </div>
            <img className="main-photo" src={photo} />
          </section>
          <div className="images-container">
            <div className="span-container">
              <span>Tech Stack</span>
            </div>
            <div className="image-container">
              <div className="image-styles">
                <img className="images" src={kotlin} />
              </div>
              <div className="image-styles">
                <img className="images" src={swift} />
              </div>
              <div className="image-styles">
                <img className="images" src={java} />
              </div>
              <div className="image-styles">
                <img className="images" src={react} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Header;
