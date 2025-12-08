import React from "react";
import Slider from "react-slick";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const images = [
    "/header_1.png",
    "/header_img.png",
    "/header_1.png"
  ];

  // Slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    fade: false,
    cssEase: "linear",
  };

  return (
    <div className="header">

      <Slider {...settings} className="header-slider">
        {images.map((img, i) => (
          <div key={i}>
            <div
              className="header-slide"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* Your original content remains the same */}
      {/* <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted
          with the finest ingredients and culinary expertise. 
        </p>
        <button onClick={() => navigate("/menu")}>View Menu</button>
      </div> */}

    </div>
  );
};

export default Header;
