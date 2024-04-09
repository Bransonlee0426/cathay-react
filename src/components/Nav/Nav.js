import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className="router-wrap">
      <div>
        <Link to="/">Calendar</Link>
      </div>
      <div>
        <Link to="/questions">Questions</Link>
      </div>
    </nav>
  );
}
