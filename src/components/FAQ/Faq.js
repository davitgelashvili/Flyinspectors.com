import Item from "./Item.js";
import styles from "./Faq.module.scss";

const Faq = () => {

  const data = [
    {
      title: "IN WHICH CASES, CAN I CLAIM COMPENSATION",
      desc: "When struggling with flight-related problem, most of the passengers don't even know they are eligible for compensation. let alone the resources they need to determine if they qualify for it. You may need legal expertise and a lot of time to get familiar with the flight regulations and your rights as an airline passenger.Fortunately, there is easier solution, Flyinspectors are experts in this field. We can ease the process of getting the flight compensation you may qualify for. And it’s completely free for you, we only take fee of 25% in case of success. Are we not successful, you pay nothing.",
    },
    {
      title: "WHAT DO I NEED TO RECEIVE COMPENSATION?",
      desc: "After Flyinspectors engagement you do not have to do anything, except to wait for your flight compensation calmly.Yes, it's as easy as it sounds!",
    },

  ];


  return (
    <div id="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className={styles.faqHeader}> FREQUENTLY ASKED QUESTIONS</div>
          </div>
          <div className="col-12">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
