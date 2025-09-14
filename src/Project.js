import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useRef } from "react";

const Project = () => {
  const headingRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Adjust based on how much of the element should be visible before triggering
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (projectRef.current) observer.observe(projectRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  return (
    <div className="projects sec-pad">
      <div className="pro-container">
        <h2 ref={headingRef} className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </span>
        </h2>
      </div>
      <div ref={projectRef} className="project-grid">
        <div className="project">
          <div className="project-wrap">
            <img className="project-img" src="./amazon-app.png"></img>
            <div className="project-text">
              <h3 className="project-title">Amazon-clone</h3>
              <p className="project-paragraph">
                Amazon-clone just as its name implies is a clone of the
                well-known Amazon e-commerce website, it possesses an appealing
                UI and well set-up back-end which makes the overall product
                appear gracious ✨.
              </p>
              <div className="social-content">
                <a
                  href="https://amazon-clone-c5e64.netlify.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faGlobe}
                    size="2x"
                  />
                </a>

                <a
                  href="https://github.com/Ozcode2/amazon-clone/tree/main"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faGithub}
                    size="2x"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-wrap">
            <img className="project-img" src="./moon-app.png"></img>
            <div className="project-text">
              <h3 className="project-title">Moon-App</h3>
              <p className="project-paragraph">
                Moon-App is a clone of the landing page of the website{" "}
                <a href="https://www.moonapp.io" target="_blank">
                  www.moonapp.io
                </a>
                , it leaves the user in awe on visiting the website it comprises
                of a video and lots of animations, It makes the overall user
                experience top-notch
              </p>
              <div className="social-content">
                <a href="https://moon-app-03.netlify.app/" target="_blank">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faGlobe}
                    size="2x"
                  />
                </a>

                <a
                  href="https://github.com/Ozcode2/moon-app/blob/main/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faGithub}
                    size="2x"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-wrap">
            <img className="project-img" src="./achieve.png"></img>
            <div className="project-text">
              <h3 className="project-title">Achievers-Educare</h3>
              <p className="project-paragraph">
                This is a website for an academic institution, Achievers Educare
                Academy, It was my first client project, the users whom are
                mostly students sure do enjoy the entire experience this website
                provide.
              </p>
              <div className="social-content">
                <a
                  href="https://achievers-educare-academy.netlify.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faGlobe}
                    size="2x"
                  />
                </a>

                <a
                  href="https://github.com/Ozcode2/achievers-educare-academy/tree/main/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faGithub}
                    size="2x"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
