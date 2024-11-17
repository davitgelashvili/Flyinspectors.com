import styles from "./ServicesOptions.module.scss";
import Item from "./Item";


const ServicesOptions = () => {
  const data = [
    {
      title: "Overbooking Compensation",
      desc: "Missed your flight because it was overbooked? You are eligible for a compensation.",
    },
    {
      title: "Denied Boarding Compensation",
      desc: "You were denied boarding a plane without any apparent reason or no reason at all? You are eligible for EU flight compensation.",
    },
    {
      title: "Delayed Baggage Compensation",
      desc: "Was your baggage delayed or arrived damaged? You are eligible for compensation.",
    },
  ];
  return (
    <div className={styles.services}>
      <div className="container">
        <h3>
          <span>FLYINSPECTORS</span> HELPED MANY PASSENGERS
        </h3>
        <h3>WE CAN HELP YOU TOO</h3>
        <div className="row">
          {data?.map((item) => {
            return (
              <div className="col-4" key={item.title}>
                <Item title={item.title} desc={item.desc} icon={item.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesOptions;
