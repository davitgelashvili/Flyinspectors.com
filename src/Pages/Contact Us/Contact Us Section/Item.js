import React from "react";
import styles from "./ContactUs.module.scss";

const Item = () => {
  const data = [
    {
      country: "Georgia",
      cards: [
        { label: "Call us", value: "+995 322 16 00 16" },
        { label: "Send us an email.", value: "info@flyinspectors.com" },
        {
          label: "Address",
          value: "Office 77, 10/12 Merab Aleksidze Street, Tbilisi, Georgia.",
        },
      ],
    },
    {
      country: "Ireland",
      cards: [
        { label: "Call us", value: "+353 1 6917646" },
        { label: "Send us an email.", value: "info@flyinspectors.com" },
        {
          label: "Address",
          value:
            "Office 29, Clifton House, Fitzwilliam Street Lower, Dublin 2, D02 XT91, Republic Of Ireland.",
        },
      ],
    },
  ];

  return (
      <div className="row">
        {data.map((section, index) => (
          <div className={`col-lg-6`} key={index}>
            <div>
            <h3 className={styles.countryHeader}>{section.country}</h3>
            <div className={styles.cardContainer}>
              {section.cards.map((card, cardIndex) => (
                <div className={styles.card} key={cardIndex}>
                  <h5>{card.label}</h5>
                  <p>{card.value}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Item;
