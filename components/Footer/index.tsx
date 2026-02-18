"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-stroke/30 bg-defaultBg py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded text-white">
                <Image
                  src="/images/logo/logo-corso-uomini.png"
                  alt="logo"
                  width={80}
                  height={20}
                />
          </div>
          <div className="text-center text-sm text-body-color md:text-right">
            © {new Date().getFullYear()} Corso nazionale uomini
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
