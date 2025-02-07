"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp  relative z-10  py-16 md:py-20 lg:pt-24 my-20"
        data-wow-delay=".1s"
      >
        <div className="absolute right-10 top-14 z-[-1]">
          <Image
            alt="soka gakkai"
            src="/images/logo/logo-soka.svg"
            width={500}
            height={200}
            className="w-40 md:w-80"
          />
        </div>

        <div
          className="absolute bottom-[-4rem] right-0 left-0 flex justify-center gap-20
        z-[-1]"
        >
          <Image
            alt="soka gakkai"
            src="/images/uccelli-sx.svg"
            width={500}
            height={200}
            className="w-80"
          />
          <Image
            alt="soka gakkai"
            src="/images/uccelli-dx.svg"
            width={500}
            height={200}
            className="w-80 hidden md:block"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
