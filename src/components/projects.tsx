import "../styles/projects.css";
import { AllProjects } from "../data/projects";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Projects = () => {
  return (
    <Router>
      <div className="project-container" id="projects">
        <div className="project-section">
          <h2>Projects</h2>
          <p>Each project is a unique piece of development 🧩</p>
          <div className="project-flex-container">
            {AllProjects.map((project) => {
              return (
                <div className="projects" key={project.id}>
                  <div className="projects-card">
                    <img src={project.iconUrl} />
                    <h3>
                      {project.name}{" "}
                      {project.platform === "Both" ? (
                        <div className="section-platform">
                          <i className="fa-brands fa-android"></i>
                          <i className="fa-brands fa-apple"></i>
                        </div>
                      ) : (
                        <div className="section-platform">
                          <i
                            className={
                              "fa-brands" +
                              (project.platform === "Android"
                                ? " fa-android"
                                : project.platform === "iOS"
                                ? " fa-apple"
                                : "")
                            }
                          ></i>
                        </div>
                      )}
                    </h3>
                    <p>{project.description}</p>

                    <div className="links">
                      <Link to={project.gitHubUrl} target="_blank">
                        <span>
                          Code<i className="fa-brands fa-github"></i>
                        </span>
                      </Link>
                      {project.prodUrl && ( // Render if project.prodUrl exists
                        <Link to={project.prodUrl} target="_blank">
                          <span>
                            Get on Store{" "}
                            <i className="fa-brands fa-google-play"></i>
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Projects;
