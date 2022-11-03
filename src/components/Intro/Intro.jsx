import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/asiangirl.png";
import sport from "../../img/005-sport-car.png";
import safety from "../../img/006-safety.png";
import crown from "../../img/007-crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import telegram from "../../img/002-telegram.png";
import whatsapp from "../../img/001-whatsapp.png";
import smartphone from "../../img/003-smartphone.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Professional On</span>
          <span>Demand Driver Services 24/7</span>
          <span>
            <Typewriter
              options={{
                strings: [introdata.animated.first],
                autoStart: true,
                loop: true,
                deleteSpeed: 30
              }}
            />
          </span>
        </div>
        <a href="tel:+60 17 750 3964">
          <button className="button i-button">Call us</button>
        </a>
        <div className="i-icons">
          <a href="https://t.me/JBDRIVE99"><img src={telegram} alt="" /></a>
          <a href="https://wa.link/vtmra2"><img src={whatsapp} alt="" /></a>
          <a href="tel:+60 17 750 3964"><img src={smartphone} alt="" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-60%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={sport}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Safety," text2="Convenient" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={safety} text1="Reliable," text2="Service" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
