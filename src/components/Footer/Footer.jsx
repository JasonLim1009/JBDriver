import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Phone from "@iconscout/react-unicons/icons/uil-phone";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://t.me/JBDRIVE99"><Telegram color="white" size={"3rem"} /></a>
          <a href="https://wa.link/vtmra2"><Whatsapp color="white" size={"3rem"} /></a>
          <a href="tel:+60 17 750 3964"><Phone color="white" size={"3rem"} /></a>
          <p>🗺️ Johor Bahru, Malaysia <br /> <a href="tel:+60 17 750 3964">📞 +6017 750 3964</a> <br /> <a href="mailto:jbdrive43@gmail.com">📧 jbdrive43@gmail.com</a> <br />⌚ Monday to Sunday : 24Hour</p>
        </div>
        {/* <span>jbdrive43@gmail.com</span> */}
        <p>&copy;COPYRIGHT 2022<span> | Created By <a href="#">JBDrive</a></span> | ALL RIGHTS RESERVED | POWERED BY SYSTEM</p>
      </div>
    </div>
  );
};

export default Footer;
