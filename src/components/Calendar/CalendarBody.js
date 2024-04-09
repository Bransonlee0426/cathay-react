import React from 'react';
import styles from './CalendarBody.module.css';

export default function CalendarBody({ dates, dateUnit, onClickDate }) {
  const rows = [];

  function getTdClassName(dateInfo) {
    let className = styles.td;
    if (dateInfo.isToday) {
      className += ` ${styles.today}`;
    }
    if (dateInfo.isActive) {
      className += ` ${styles.active}`;
    }
    if (!dateInfo.isCurrentMonth) {
      className += ` ${styles['non-current-month']}`;
    }
    return className;
  }

  // The for loop is used to divide the dates array into weeks, and each week is represented by a row in the table.
  const DAYS_IN_WEEK = 7;
  for (let i = 0; i < dates.length; i += DAYS_IN_WEEK) {
    const cells = dates.slice(i, i + DAYS_IN_WEEK).map((dateInfo, index) => (
      <td key={index} className={getTdClassName(dateInfo)} onClick={() => onClickDate(dateInfo)}>
        {dateInfo.date.getDate()}
        {dateUnit}
      </td>
    ));
    rows.push(<tr key={i / DAYS_IN_WEEK}>{cells}</tr>);
  }
  return (
    <table className={styles.table}>
      <tbody>{rows}</tbody>
    </table>
  );
}

CalendarBody.defaultProps = {
  dates: [
    {
      year: null,
      month: null,
      date: null,
      isToday: false,
      isSelect: false,
      isCurrentMonth: false,
    },
  ],
  dateUnit: null,
  onClickDate: () => {}, // click date event
};
