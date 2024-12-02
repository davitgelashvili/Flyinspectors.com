import React from "react";
import styles from "./Map.module.scss"
const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.4353717851777!2d44.76642301208394!3d41.73270127113833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473681a95bfa7%3A0x28c6e17ce01e87a4!2sFlyinspectors!5e0!3m2!1sen!2sge!4v1733158525233!5m2!1sen!2sge"
        className={styles.map}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Flyinspectors Location"
      ></iframe>
    </div>
  );
};

export default Map;
