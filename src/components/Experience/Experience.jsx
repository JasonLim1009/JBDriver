import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>30</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Professional </span>
        <span>Drivers</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>854</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Trips </span>
        <span>Made</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>24</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Hours </span>
        <span>Availability</span>
      </div>
    </div>
  );
};

export default Experience;
