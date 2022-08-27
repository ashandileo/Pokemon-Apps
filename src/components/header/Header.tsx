import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-sky-500">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Pokemon GO
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
