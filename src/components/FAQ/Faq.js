import Item from "./Item.js";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1> FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <div className="col-8">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
