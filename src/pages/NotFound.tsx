
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-marvel-black text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-comic text-marvel-red mb-4">404</h1>
        <div className="speech-bubble mb-8 inline-block">
          <p className="font-comic text-2xl text-black">
            Whoops! Page not found in this universe!
          </p>
        </div>
        <p className="text-xl mb-8 font-marvel">
          Even heroes can't find this page.
        </p>
        <Link to="/" className="comic-button bg-marvel-red inline-block">
          BACK TO HEADQUARTERS
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
