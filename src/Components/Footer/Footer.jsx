import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#000E22] text-white py-7  flex justify-between items-center relative top-32">
        <div className="flex relative left-10 md:left-20">
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
        </div>
        <div className="relative md:right-10 right-20">
          <p className="text-sm">© 2023 Abbott. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
