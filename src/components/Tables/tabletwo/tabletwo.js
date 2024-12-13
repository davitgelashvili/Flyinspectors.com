import React from 'react'
import styles from "./CompensationHowMuch.module.scss";


const tabletwo = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.header}>Distance/Delay</th>
                    <th className={styles.headerLg}>Flight delay</th>
                    <th className={styles.header}>Compensation amount</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.cell}>Less than 1500km</td>
                    <td className={styles.cell}>More than 3 hours</td>
                    <td className={styles.cell}>EUR 250</td>
                  
                </tr>
                <tr>
                    <td className={styles.cell}>1500-3500km ourside EU</td>
                    <td className={styles.cell}>More than 3 hours</td>
                    <td className={styles.cell}>EUR 400</td>
           
                </tr>
                <tr>
                    <td className={styles.cell}>More than 3500km outside EU</td>
                    <td className={styles.cell}>More than 3 hours</td>
                    <td className={styles.cell}>EUR 600</td>
          
                </tr>
            </tbody>
        </table>
    );
}

export default tabletwo