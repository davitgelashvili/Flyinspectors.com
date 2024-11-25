import { Link } from 'react-router-dom';
import styles from './SubmitLink.module.scss'

const SubmitLink = ({className}) => {
  return (
    <Link to={"/submit-claim"} className={`${className && className} ${styles.link}`}>Submit Claim </Link>
  );
};

export default SubmitLink;
