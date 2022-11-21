import React, { useContext } from "react";
import "./Works.css";
import home from "../../img/001-home.png";
import toast from "../../img/002-toast.png";
import alcoholism from "../../img/003-alcoholism.png";
import sport from "../../img/004-sport-car.png";
import safety from "../../img/005-safety.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesomes">
          <span style={{ color: darkMode ? "white" : "" }}>
            QQDriver is a Malaysia driver booking platform that <br />offers convenient and reliable designated driver services.
          </span>
          <span>We focus on providing a safe and enjoyable experience to <br />our customers anytime, anywhere.</span>
          <spane>
            Customers no longer have to worry about drink-driving,
            <br />
            because we will get you to the destination safely in the comfort <br />of your own vehicle.
          </spane>
          <a href="tel:+60 17 750 3964">
            <button className="button s-button">Booking</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={home} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={toast} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={safety} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={sport} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={alcoholism} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
