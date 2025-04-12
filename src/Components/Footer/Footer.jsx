import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#000E22] text-white py-7  flex justify-between items-center relative top-32">
        <div className="flex relative left-20">
          <img
            src="/Images/logo-icon.svg"
            className="h-[17px] me-1"
            alt="Flowbite Logo"
          />
          <img src="./Images/abbott.svg" className="h-[17px]" alt="Abbott" />
        </div>
        <div className="relative right-20">
          <p className="text-sm">© 2023 Abbott. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
