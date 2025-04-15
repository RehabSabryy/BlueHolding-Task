import Image from 'next/image';

export default function Header() {
  return (
    <nav className="nav-bg-color absolute top-0 right-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center py-3"
        >
          <Image
            src="/Images/logo-icon.svg"
            width={20}
            height={20}
            className="h-5 w-auto"
            alt="App Logo"
            priority 
          />
          <Image
            src="/Images/abbott.svg"
            width={80}
            height={20}
            className="h-5 w-auto ms-1"
            alt="Abbott"
            priority
          />
        </a>
        <div
          className="inline-flex items-center p-2 justify-center "
        >
          <Image
            src="/Images/profile-icon.svg"
            width={34}
            height={34}
            alt="Profile"
            loading="lazy" 
          />        
          </div>
      </div>
    </nav>
  );
}
