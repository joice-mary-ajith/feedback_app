import React from 'react'

const Navbar = () => {
  return (
    <nav>   
      <div className="nav-container">
        <h2>Feedback App</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/feedback">Feedback</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
