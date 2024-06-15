import Link from 'next/link';
import React from 'react';
import { SearchBar } from './Searchbar';

export function Navbar() {
  return (
    <div className="navbar rounded-lg bg-red-400">
      {/* Home/Nav */}
      <div className="navbar-start">
        {/* Nav */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-300 p-2 shadow"
          >
            <li>
              <Link href="recommendations">Recommendations</Link>
            </li>
          </ul>
        </div>

        {/* Home */}
        <div>
          <Link href="/" className="btn btn-ghost text-xl">
            Broughton Tomatoes
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Profile */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="profile">Profile</Link>
            </li>
            <li>
              <Link href="settings">Settings</Link>
            </li>
            <li>
              <Link href="logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
