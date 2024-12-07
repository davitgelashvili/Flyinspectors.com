import styles from "./WhyWe.module.scss";

const Item = ({ title, desc }) => {
  return (
    <div className={styles.mainDiv}>
      <h3 className={styles.header}> WHY FLYINSPECTORS?</h3>
      <div className={styles.Item}>
        <p>
          Most passengers are unaware of their rights when it comes to flight-related issues. Not to mention the resources available to determine if they are entitled to flight compensation. You may need to consult a lawyer to understand the EU regulations and your rights as an air passenger.

          Fortunately, there is an easy solution. Flyinspectors are experts in this field. We can make it easy for you to get your flight compensation. It is completely free for you, we only take a 25% commission if we are successful.

          We have helped many passengers, and we can help you too!

          8 out of 10 passengers who have tried to get compensation on their own say that the airline refused or even didn’t respond.

          We will make sure that our customers are not treated this way!
        </p>
      </div>
    </div>
  );
};

export default Item;
