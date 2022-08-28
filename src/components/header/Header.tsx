import React from "react";

const Header = () => {
  return (
    <header className="border-gray-200 bg-sky-500 sticky z-[12] w-full top-[0px]">
      <nav className="container px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
              className="w-[100px]"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
