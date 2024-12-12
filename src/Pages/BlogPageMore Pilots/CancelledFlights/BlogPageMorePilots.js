import Item from "./Item.js";
import styles from "./BlogPageMorePilots.module.scss";

const BlogPageMorePilots = () => {
  return (
    <div className={styles.services}>
      <div className={`container`}>
        {/* <h3 className={styles.services__header}>
          Your animal must have all required vaccines in order to be permitted
          on board.
        </h3> */}
        <div className="row">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default BlogPageMorePilots;
