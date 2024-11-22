import Item from "./Item.js";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <div className={styles.Faq}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 d-flex justify-content-center">
            <div className={styles.faqHeader}> FREQUENTLY ASKED QUESTIONS</div>
          </div>
          <div className="col-lg-12 col-12">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
