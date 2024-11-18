import styles from "./ServicesOptions.module.scss";
import Item from "./Item";

const ServicesOptions = () => {
  const data = [
    {
      title: "SUBMIT CLAIM",
      desc: "When having problems with your flight all you need to do is fill the compensation claim form on our website, you can even get compensation for up to 6 years prior. From there our experts will do all the necessary paper and routine works and present the complaint to the airline company.",
    },
    {
      title: "SIT BACK AND RELAX",
      desc: "After Flyinspectors engagement you do not have to do anything, except to wait for your flight compensation calmly.Yes, it's as easy as it sounds!",
    },
    {
      title: "RECEIVE COMPENSATION",
      desc: "After airlines transfer the compensation, we immediately transfer it to you, with the success fee of 25% deducted. If by any chance we are not successful you pay nothing.",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className="container"> 
        <div className={styles.services}>
          <h3>
            <span>FLYINSPECTORS</span> HELPED MANY PASSENGERS
          </h3>
          <h3>WE CAN HELP YOU TOO</h3>
        </div>
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
