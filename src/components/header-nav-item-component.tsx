import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderNavItemComponent({ text, to }: { text: string; to: string }) {
  return (
    <li>
      <Link 
        to={to} 
        className="block text-cyan-600 font-bold p-2 rounded-full hover:bg-cyan-200"
        >
        { text }
      </Link>
    </li>
  );
}
