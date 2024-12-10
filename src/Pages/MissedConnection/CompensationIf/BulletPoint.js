import { useTranslation } from "react-i18next";
import styles from "./CompensationIf.module.scss";

const BulletPoint = () => {
  const {t} = useTranslation()
  return (
    <div>
      <div className={styles.headerOfBullet}>
      {t('MissedConnectionCompensationIf.title')}
      </div>
      <ul className={styles.bulletList}>
        <li>{t('MissedConnectionCompensationIf._1')}</li>
        <li>
        {t('MissedConnectionCompensationIf._2')}
        </li>
        <li>
        {t('MissedConnectionCompensationIf._3')}
        </li>
        <li>{t('MissedConnectionCompensationIf._4')}</li>
      </ul>
    </div>
  );
};

export default BulletPoint;
