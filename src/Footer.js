import "./Footer.css";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const today = new Date();

  const headingRef = useRef(null);

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

    // Cleanup observer on component unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div className="main-footer">
      <div className="main-container2">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2
              ref={headingRef}
              className="heading heading-sm main-footer__heading-sm"
            >
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ozcode2"
              >
                <FontAwesomeIcon
                  className="main-footer__icon"
                  icon={faGithub}
                  alt="Øzcode's Github Profile"
                  size="2x"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nzelu-ozioma-90b159277"
              >
                <FontAwesomeIcon
                  className="main-footer__icon"
                  icon={faLinkedin}
                  alt="Øzcode's LinkedIn Profile"
                  size="2x"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Ozcode2"
              >
                <FontAwesomeIcon
                  className="main-footer__icon"
                  icon={faXTwitter}
                  alt="Øzcode's X Profile"
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 ref={headingRef} className="heading heading-sm text-lt">
              Øzcode
            </h2>
            <p className="main-footer__short-desc">
              A Full-stack focused Web Developer building both the Frontend and
              back-end of Websites and Web Applications that leads to the
              success of the overall product
            </p>
          </div>
        </div>
        <div className="main-footer__lower">
          Copyright ØzcoTech &copy; {today.getFullYear()} Developed by
          <a rel="noreferrer" target="_blank" href="/">
            {" "}
            ØzcoTech inc.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
