import styles from "./FeedBack.module.scss";

function FeedBack() {
  return (
      <form className="col-4">
        <label htmlFor="firstname" className={styles.label}>
          First and Last Name
        </label>
        <div className="mb-3">
          <input
            type="firstname"
            className={styles.input}
            id="firstname"
            placeholder="e.g. John Doe"
          />
        </div>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <div className="mb-3">
          <input
            type="email"
            className={styles.input}
            id="email"
            placeholder="E-mail"
          />
        </div>
        <div className="column">
          <label htmlFor="Subject" className={styles.label}>
            Subject
          </label>
          <div className="mb-3">
            <input
              type="Subject"
              className={styles.input}
              id="Subject"
              placeholder="Subject"
            />
          </div>
        </div>
      </form>
  );
}

export default FeedBack;
