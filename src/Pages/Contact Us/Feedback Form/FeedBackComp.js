import FeedBack from "./FeedBack";
import styles from "./FeedBack.module.scss";
function FeedBackComp() {
  return (
  <div className={styles.mainDiv}>
    <div className="container">
      <h3 className="mt-5">FeedBack Form</h3>
      <FeedBack />
    </div>
  </div>
  );
}

export default FeedBackComp;
