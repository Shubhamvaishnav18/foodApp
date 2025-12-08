// import React from "react"
// import "./AppDownload.css"
// import { assets } from "../../assets/assets"

// const AppDownload = () => {
//   return (
//     <div className="app-download" id="app-download">
//         <p>For Better Experience Download <br /> Foodly App</p>
//         <div className="app-download-platforms">
//             <img src={assets.play_store} alt="" />
//             <img src={assets.app_store} alt="" />
//         </div>
//     </div>
//   )
// }

// export default AppDownload

import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="service-section" id="services">
      <h2 className="service-title">Our Best Service</h2>

      <div className="service-card">
        <div className="service-info">
          <h3>Rentals Service</h3>
          <p>
            Get everything you need on rent with fast delivery and affordable pricing.
            From kitchen essentials to daily living items — we make your life easier!
          </p>
          <button>Explore Rentals</button>
        </div>

        {/* <div className="service-img">
          <img src="/rentals.png" alt="Rentals Service" />
        </div> */}
      </div>
    </div>
  );
};

export default AppDownload;
