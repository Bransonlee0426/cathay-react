import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from './Calendar';
import React from 'react';

test('renders calendar header and body', async () => {
  render(<Calendar />);
  // header render
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const dateElement = screen.getByText(`${year}年${month}月`);
  expect(dateElement).toBeInTheDocument();
  // body render
  const bodyElement = screen.getByRole('table');
  expect(bodyElement).toBeInTheDocument();
  //current date
  const todayElement = screen.getByText(`${date}日`);
  expect(todayElement).toHaveClass('today');
});

//First click date to set it as start date value.
test('first click date', () => {
  render(<Calendar />);
  const dateElement = screen.getByText('1日');
  fireEvent.click(dateElement);
  expect(dateElement).toHaveClass('active');
});

//Next click date is same as current select option or later than current option will set it as end date value.
test('next click date later or same', () => {
  render(<Calendar />);
  const dateElements = [];
  const startDate = 5;
  const endDate = 30; //endDate >= startDate
  expect(startDate).toBeLessThanOrEqual(endDate);
  for (let i = startDate; i <= endDate; i++) {
    const dateElementsForDay = screen.getAllByText(`${i}日`);
    const currentMonthDateElements = dateElementsForDay.filter((element) => !element.classList.contains('non-current-month'));
    dateElements.push(...currentMonthDateElements);
  }

  //select start date
  fireEvent.click(dateElements[0]);
  fireEvent.click(dateElements[dateElements.length - 1]);

  dateElements.forEach((dateElement) => {
    expect(dateElement).toHaveClass('active');
  });
});

// Next click date is earlier than current option will reset start date value.
test('next click date earlier', () => {
  const selectDate = (date: number) => {
    const dateElement = screen.getByText(`${date}日`);
    fireEvent.click(dateElement);
    return dateElement;
  };

  render(<Calendar />);
  const startDate = 10;
  const nextStartDate = 9; //nextStartDate < startDate
  expect(nextStartDate).toBeLessThanOrEqual(startDate);

  //select start date
  const startDateElement = selectDate(startDate);
  expect(startDateElement).toHaveClass('active');

  //select next start date
  const nextStartDateElement = selectDate(nextStartDate);
  expect(startDateElement).not.toHaveClass('active');
  expect(nextStartDateElement).toHaveClass('active');
});
