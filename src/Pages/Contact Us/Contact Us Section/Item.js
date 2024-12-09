import React from "react";
import styles from "./ContactUs.module.scss";
import { useTranslation } from "react-i18next";

const Item = () => {
  const {t} = useTranslation()
  const data = [
    {
      country: t('ContactUs.georgia'),
      cards: [
        {
          label: t('ContactUs.mob'),
          value: "+995 593 00 03 94",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137843/ic_call_24px_cnlpgo.png",
        },
        {
          label: t('ContactUs.email'),
          value: "info@flyinspectors.com",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_markunread_24px_x9usk2.png",
        },
        {
          label: t('ContactUs.address'),
          value: "5 Iuri Gagarini Street, Tbilisi, Georgia",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_room_24px_hoqod0.png",
        },
      ],
    },
    {
      country: t('ContactUs.ireland'),
      cards: [
        {
          label: t('ContactUs.mob'),
          value: "+995 0322 19 53 29",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137843/ic_call_24px_cnlpgo.png",
        },
        {
          label: t('ContactUs.email'),
          value: "info@flyinspectors.com",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_markunread_24px_x9usk2.png",
        },
        {
          label: t('ContactUs.address'),
          value:
            "363 Chapter Road, London, England NW2 5ND",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_room_24px_hoqod0.png",
        },
      ],
    },
  ];

  return (
    <>
      {data.map((section, index) => (
        <div className={`col-lg-6`} key={index}>
          <div>
            <h3 className={""}>{section.country}</h3>
            {section.cards.map((card, cardIndex) => (
              <div
                className={`${styles.item} d-flex align-items-center`}
                key={cardIndex}
              >
                <div className={styles.icon}>
                  <img src={card.icon} alt="icon" />
                </div>
                <div className={styles.text}>
                  <h5 className={styles.title}>{card.label}</h5>
                  <p className={styles.desc}>{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
