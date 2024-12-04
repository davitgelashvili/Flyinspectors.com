import styles from "./ContactSubmitPage.module.scss";

const ContactSubmitPage = () => {
  return (
    <div className="">
      <div className={styles.mainDiv}>
        <h3 className={styles.header}>
            Contact Details
        </h3>
        <div className={styles.item}>
          <h4><img src="https://res.cloudinary.com/dluqxr8lw/image/upload/v1733343121/ic_location_on_24px_w7dlic.png" alt="icon" /> Office 29, Clifton House Fitzwilliam Street Lower Dublin 2, D02 XT91, Republic Of Ireland</h4>
          <br></br>
          <h4><img src="https://res.cloudinary.com/dluqxr8lw/image/upload/v1733343121/ic_call_24px_1_nbfctc.png" alt="icon" />  +353 1 6917646</h4>
          <br></br>
          <h4><img src="https://res.cloudinary.com/dluqxr8lw/image/upload/v1733343121/ic_markunread_24px_1_qdrddk.png" alt="icon" />  team@flyinspectors.com</h4>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ContactSubmitPage;
