import React from "react";
import styles from "./Map.module.scss"
const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9529.207857877456!2d-6.2483383!3d53.3378506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9658248405%3A0x577175eee69e3490!2sClifton%20House%20BusinessCentre!5e0!3m2!1sen!2sge!4v1733342692217!5m2!1sen!2sge"
      className={styles.map}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Flyinspectors Location"
    ></iframe>
  );
};

export default Map;
