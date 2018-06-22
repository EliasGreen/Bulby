const React = require('react');
const Link = require('react-router-dom').Link
const style = require('../styles/Main.css');

const Main = () => {
let lastAngle = 0;
  const rotateBulb = () => {
    lastAngle += 360;
    const bulb = document.getElementsByClassName("lightbulb")[0];
    bulb.style.transform = "rotate(" + lastAngle + "deg) scale(10) translateZ(0)";
  }
  
  return (
    <div className="lightbulb" onClick={rotateBulb}>
        <span className="ico ico-lightbulb"></span>
        <span className="ico ico-lightbulb1"></span>
        <span className="ico ico-lightbulb2"></span>
        <span className="ico ico-lightbulb3"></span>
      <span className="ico ico-lightbulb4"></span>
    </div>
  );
};

module.exports = Main;