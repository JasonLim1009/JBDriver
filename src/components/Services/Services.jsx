import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import booking from "../../img/002-booking.png";
import arrived from "../../img/001-arrived.png";
import sport from "../../img/004-sport-car.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>About Us</span>
        <span>services</span>
        <spane>
          QQDriver offers designated driver services that are convenient, safe, and reliable.
          <br />
          You no longer have to worry about driving home after having a fun night out,
          <br />
          because our professionals will get you home safely in the comfort of your own vehicle.
        </spane>
        <a href='tel:+60 17 750 3964' download>
          <button className="button s-button">Booking</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={booking}
            heading={"1. BOOKING"}
            detail={"Book our designated driver through Whatsapp and provide your booking details."}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={arrived}
            heading={"2. ARRIVAL"}
            detail={"Our designated driver will arrive at the pick-up Location to drive your vehicle."}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={sport}
            heading={"3. ENJOY YOUR TRIP"}
            detail={
              "Just sit back and relax! Our professional driver will get you to your destination safely."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
