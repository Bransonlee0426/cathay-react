# Cathay React Application

This is a React application that includes a calendar component and a questions page.

1. The calendar component allows users to select a range of dates, providing a flexible and user-friendly interface for date selection.

2. The questions page provides a list of questions and their corresponding answers, serving as a helpful resource for users to find information and solutions.

The application is built with React 18.2.0 and TypeScript 4.9.5.

## Browser Support

This application supports the latest versions of Chrome, Edge, and Firefox.

## Main Files

### Calendar Component

The calendar component is composed of three main files:

1. `Calendar.js`: This is the main file for the calendar component. It uses the CalendarHeader and CalendarBody components to render a full calendar.

2. `CalendarHeader.js`: This file contains the CalendarHeader component, which renders the header of the calendar, including the month and year, and navigation buttons.

3. `CalendarBody.js`: This file contains the CalendarBody component, which renders the body of the calendar, including the days of the week and the dates.

### Questions Page

The questions page is composed of two main files:

1. `QuestionsPage.js`: This file contains the QuestionsPage component, which renders a list of questions and their answers. Each question can be expanded to show its answer.

2. `Question.js`: This file contains the Question component, which is used in the QuestionsPage component to render each individual question and its answer.

## System Requirements

- Node.js 14.0.0 or later
- npm 6.0.0 or later

### Unit Tests

The `Calendar.test.tsx` file contains unit tests for the calendar component.

## Installation

To install the application, run the following command:

```bash
npm install
```

## Usage

After installation, you can start the application by running the following command:

```bash
npm start
```

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
```