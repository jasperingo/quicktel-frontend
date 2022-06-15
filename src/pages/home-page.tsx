import React from 'react';
import { Link } from 'react-router-dom';

const UnauthLinksComponent = ({ text, to }: { text: string; to: string }) => {
  return (
    <Link 
      to={to} 
      className="w-fit block text-white rounded-xl p-2 bg-cyan-600 hover:bg-cyan-200"
    >
      { text }
    </Link>
  );
}

export default function HomePage({ isAuth }: { isAuth: boolean; }) {

  if (!isAuth) {
    return (
      <div className="container">
        <div className="shadow shadow-cyan-600 text-cyan-600 rounded-xl p-4 my-4">
          <h2 className="font-bold text-lg mb-4">Welcome to Quicktel Articles</h2>

          <div className="mb-4">To start seeing our articles...</div>

          <div className="flex gap-4 items-center">
            <UnauthLinksComponent text="Sign up" to="sign-up" />
            <div>or</div>
            <UnauthLinksComponent text="Sign in" to="sign-in" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      Home page
    </div>
  );
}
