import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.css';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { format, isEqual, isAfter, isBefore, isWithinInterval } from 'date-fns';

export const SharedStateContext = React.createContext();
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

/**
 * create the date object
 * @param {Date} date
 * @param {Boolean} isToday
 * @param {Boolean} isActive
 * @param {Boolean} isCurrentMonth
 * @returns
 */
function createDateObject(date, isToday, isActive, isCurrentMonth) {
  return {
    date: date,
    isToday: isToday,
    isActive: isActive,
    isCurrentMonth: isCurrentMonth,
  };
}

/**
 * generate the dates of the month
 * @param {number} year what year to generate
 * @param {number} month what month to generate
 * @returns
 */
function generateDates(year, month) {
  const dates = [];
  const MAX_DAYS_IN_MONTH = 31;
  const DAYS_IN_WEEK = 7;
  for (let i = 1; i <= MAX_DAYS_IN_MONTH; i++) {
    const date = new Date(year, month - 1, i);
    if (date.getMonth() + 1 === month) {
      const isToday = date.getFullYear() === currentYear && date.getMonth() + 1 === currentMonth && date.getDate() === currentDate;
      const isCurrentMonth = date.getMonth() + 1 === month;
      dates.push(createDateObject(date, isToday, false, isCurrentMonth));
    }
  }
  //if the length of the dates array is not divisible by 7, the previous day's date will be added to the beginning of the dates array until the length of the dates array is divisible by 7.
  while (dates.length % DAYS_IN_WEEK !== 0) {
    const firstDate = dates[0];
    const newDate = new Date(firstDate.date);
    newDate.setDate(newDate.getDate() - 1);
    const isToday = newDate.getFullYear() === currentYear && newDate.getMonth() + 1 === currentMonth && newDate.getDate() === currentDate;
    dates.unshift(createDateObject(newDate, isToday, false, false));
  }
  return dates;
}

export default function Calendar() {
  const [dates, setDates] = useState(generateDates(currentYear, currentMonth));
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const currentHeaderTitle = format(new Date(), `${currentYear}年${currentMonth}月`);

  /**
   * update the date's active status
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {Boolean} isActive
   */
  const updateDate = (startDate, endDate, isActive) => {
    setDates((prevDates) =>
      prevDates.map((item) => {
        // augment the date object with isActive status
        if (isWithinInterval(item.date, { start: startDate, end: endDate })) {
          return { ...item, isActive: isActive };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * handle the logic of start and end date after clicking the date
   * @param {Object} clickDate - The clicked date object.
   * @param {Date} clickDate.date - The clicked date.
   */
  const handleDateSelection = (clickDate) => {
    const { startDate, endDate } = dateRange;
    let newDateRange = {};
    if (startDate === null) {
      // First click date to set it as start date value.
      newDateRange = { startDate: clickDate.date, endDate: null };
    } else if (endDate === null) {
      // Next click date is same as current select option or later than current option will set it as end date value.
      if (isAfter(clickDate.date, startDate) || isEqual(clickDate.date, startDate)) {
        newDateRange = { ...dateRange, endDate: clickDate.date };
      } else if (isBefore(clickDate.date, startDate)) {
        //Next click date is earlier than current option will reset start date value.
        updateDate(dateRange.startDate, dateRange.startDate, false);
        newDateRange = { startDate: clickDate.date, endDate: null };
      }
    }
    // Only set date range if both startDate and endDate are not set
    if (!dateRange.startDate || !dateRange.endDate) {
      setDateRange(newDateRange);
    }
  };

  // the event when clicking the date
  const onClickDate = (dateInfo) => {
    if (!dateInfo.isCurrentMonth) return; // if not current month, return
    handleDateSelection(dateInfo);
  };

  // listen to the dateRange changes
  useEffect(() => {
    const triggerActive = () => {
      if (dateRange.endDate) {
        updateDate(dateRange.startDate, dateRange.endDate, true);
      } else {
        // if only start date is selected, set the start date as active
        updateDate(dateRange.startDate, dateRange.startDate, true);
      }
    };
    if (!dateRange.startDate && !dateRange.endDate) return; // if no date range, return
    triggerActive();
  }, [dateRange]);

  const resetState = () => {
    setDates(generateDates(currentYear, currentMonth));
    setDateRange({ startDate: null, endDate: null });
  };

  return (
    <div className={styles['calendar-warp']}>
      <div className={styles.calendar}>
        <CalendarHeader currentHeaderTitle={currentHeaderTitle} />
        <CalendarBody dates={dates} dateUnit={'日'} onClickDate={onClickDate} />
      </div>
      <div className={styles.reset} onClick={resetState}>
        Reset
      </div>
      <br />
    </div>
  );
}
