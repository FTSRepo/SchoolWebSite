import React from 'react';
import { Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="p-4">

      {/* Nested route content will render here */}
      <Outlet />
    </div>
  );
}

export default About;
