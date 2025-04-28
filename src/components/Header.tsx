'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">

      <Link href="/" className="header__logo">
        JaeWoong.dev
      </Link>
      <nav className="header__menu">
        <Link href="/posts/new">POST</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/search">검색</Link>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '🌞' : '🌙'}
        </button>

      </nav>

    </header>

  );
}
