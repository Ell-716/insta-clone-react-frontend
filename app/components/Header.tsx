import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Instagram Logo */}
        <img
          src="https://www.pngkey.com/png/full/2-28310_instagram-logo-black-and-ahite-instagram-word-logo.png"
          alt="Instagram"
          className="h-6 md:h-8"
        />

        {/* Right Icon (Heart) */}
        <div className="text-xl md:text-2xl cursor-pointer">❤️</div>
      </nav>
    </header>
  );
}
