import React from 'react';
import styles from './CalendarHeader.module.css';
export default function CalendarHeader({ currentHeaderTitle }) {
  return (
    <div className={styles['calendar-header']}>
      <div className={styles.arrow}>&lsaquo;</div>
      <div className={styles['current-month']}>{currentHeaderTitle}</div>
      <div className={styles.arrow}>&rsaquo;</div>
    </div>
  );
}

CalendarHeader.defaultProps = {
  currentHeaderTitle: null, // current month title
};
