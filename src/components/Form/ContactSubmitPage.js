import styles from "./ContactSubmitPage.module.scss";

const ContactSubmitPage = () => {
  return (
    <div className="">
      <div className={styles.mainDiv}>
        <h3 className={styles.header}>
            Contact Details
        </h3>
        <div className={styles.item}>
          <h4>#icon# Office 29, Clifton House Fitzwilliam Street Lower Dublin 2, D02 XT91, Republic Of Ireland</h4>
          <br></br>
          <h4>#icon#  +353 1 6917646</h4>
          <br></br>
          <h4>#icon#  team@flyinspectors.com</h4>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ContactSubmitPage;
