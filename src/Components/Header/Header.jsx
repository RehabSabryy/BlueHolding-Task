
export default function Header() {
  return (
    <nav className="nav-bg-color absolute top-0 right-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center py-3"
        >
          <img
            src="/Images/logo-icon.svg"
            className="h-5"
            alt="Flowbite Logo"
          />
          <img
            src="./Images/abbott.svg"
            className="h-5 ms-1"
            alt="Abbott"
          />
        </a>
        <div
          className="inline-flex items-center p-2 justify-center "
        >
         <img src="/Images/profile-icon.svg" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}
