import React from "react";
const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1 >
          <span className="line" style={{marginBottom:"30px"}}><span className="color">&</span>I am a Senior</span>
          <span className="line" style={{marginBottom:"40px"}}>
             Software Engineer<span className="color">&</span>
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
