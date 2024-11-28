import FeedBack from "./FeedBack";
import styles from "./FeedBack.module.scss";
function FeedBackComp() {
  return (
    <div className="mb-5 container row">
      <h3>FeedBack Form</h3>
      <div className="col-lg-6">
        <FeedBack />
      </div>
      <div className=" d-flex flex-column col-lg-6">
        <textarea
          className={styles.textarea}
          type="text"
          defaultValue="Your Message"
        />
        <br />
        <button>submit</button>
      </div>
      </div>
  );
}

export default FeedBackComp;
