import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.scss";
import { useTranslation } from "react-i18next";

const Item = () => {
  const [data, setData] = useState()
  const {t} = useTranslation()
  const list = [
    {
      country: t('ContactUs.georgia'),
      cards: [
        {
          label: t('ContactUs.mob'),
          value: data?.call?.ka          ,
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137843/ic_call_24px_cnlpgo.png",
        },
        {
          label: t('ContactUs.email'),
          value: data?.email?.ka,
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_markunread_24px_x9usk2.png",
        },
        {
          label: t('ContactUs.address'),
          value: data?.address?.ka,
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_room_24px_hoqod0.png",
        },
      ],
    },
    {
      country: t('ContactUs.ireland'),
      cards: [
        {
          label: t('ContactUs.mob'),
          value: data?.call?.en,
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137843/ic_call_24px_cnlpgo.png",
        },
        {
          label: t('ContactUs.email'),
          value: data?.email?.en,
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_markunread_24px_x9usk2.png",
        },
        {
          label: t('ContactUs.address'),
          value: data?.address?.en,
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733137844/ic_room_24px_hoqod0.png",
        },
      ],
    },
  ];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/contactlist`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res[0]);
        console.log("save data:", res);
      });
  }, []);

  console.log(data)

  return (
    <>
      {list.map((section, index) => (
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
