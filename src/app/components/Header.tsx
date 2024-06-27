import React from 'react';

const Header = () => {
  return (
    <header className="bg-base-200">
      <nav className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">My Website</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
