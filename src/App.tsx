import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HeaderNavItemComponent from './components/header-nav-item-component';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <div className="container py-4 flex gap-4">
          <h1 className="font-bold text-2xl text-cyan-600">
            <Link to="/">Quicktel</Link>
          </h1>
          <nav className="flex-grow">
            <ul className="flex justify-end gap-4">
              <HeaderNavItemComponent text="Sign up" to="sign-up" />
              <HeaderNavItemComponent text="Sign in" to="sign-in" />
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage isAuth={false} />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
