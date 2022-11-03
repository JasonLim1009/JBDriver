import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import man from "../../img/002-man.png";
import woman from "../../img/001-woman.png";
import woman2 from "../../img/003-woman-1.png";
import man2 from "../../img/005-man-1.png";
import girl3 from "../../img/004-girl.png";

const Testimonial = () => {
  const clients = [
    {
      img: man,
      name: "Jason Lim",
      review:
        "Very happy and satisfied with the services. Drivers were always on time and reliable. I would recommend this company to any businessman who wishes to let someone else take the wheel after a long day of hard work.",
    },
    {
      img: woman,
      name: "Erisa Ezza",
      review:
        "I sometimes have light drinking with clients for business purposes. Last time I booked JBDrive service to send me back home. I found a lovely service provided by this company. Thanks for saving me from saman.",
    },
    {
      img: woman2,
      name: "Michelle Aadhya Rajesh",
      review:
        "We had a girl’s night out and tried JBDrive for the first time. The experience was amazing and perfect. The driver was extremely friendly and polite.",
    },
    {
      img: man2,
      name: "Deric Ong",
      review:
        "Excellent choice! Professional, punctual and very reliable. I would highly recommend JBDrive to anyone seeking a designated driver service.",
    },
    {
      img: girl3,
      name: "Jenny Wong",
      review:
        "Drivers are incredibly professional and diligent. I can trust them with my car because they display excellent driving skills at all times.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Our Client's </span>
        <span>Feedback </span>
        <span>from Us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <h4>{client.name}</h4>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
