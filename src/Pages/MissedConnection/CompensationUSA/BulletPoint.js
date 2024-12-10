import { useTranslation } from "react-i18next";
import styles from "./CompensationUSA.module.scss";

const BulletPoint = () => {
  const {t} = useTranslation()
  return (
      <div className={styles.headerOfBullet}>
        {t('MissedConnectionCompensationUSA.text')}
      </div>
  );
};

export default BulletPoint;
