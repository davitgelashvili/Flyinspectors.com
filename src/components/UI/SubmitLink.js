import styles from './SubmitLink.module.scss'

const SubmitLink = ({className}) => {
  return (
    <button className={`${className && className} ${styles.link}`}>Submit Claim </button>
  );
};

export default SubmitLink;
