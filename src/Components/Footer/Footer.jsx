import React from "react";
import "../../Styles/index.css";
import CartWidget from "./CartWidget";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_info">
        <div className="footer_info-title">Title Ecommerce</div>
        <div className="footer_info-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quidem
          ad repellendus, modi officiis maxime commodi ex explicabo cumque quas
          soluta impedit mollitia quibusdam neque a asperiores expedita
          consequatur! Velit.
        </div>
        <CartWidget />
      </div>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37157.19075442302!2d-57.54120464048127!3d-38.00293441042656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1669210738489!5m2!1ses!2sar"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="maps"
      ></iframe>
    </div>
  );
}

export default Footer;
