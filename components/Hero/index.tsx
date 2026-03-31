import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-defaultBg pb-16 pt-12 md:pb-24 md:pt-16 xl:pb-28 xl:pt-20"
    >
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-10 text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            3º Corso nazionale uomini Salerno 27-29 Marzo 2026
          </h1>
          <div className="relative mx-auto max-w-2xl md:max-w-3xl xl:max-w-4xl">
            <Image
              src="/images/motto.png"
              alt="DAIMOKU VIBRANTE PROTEZIONE ASSOLUTA"
              width={800}
              height={600}
              className="w-full max-h-[360px] md:max-h-[440px] xl:max-h-[520px] object-contain object-center rounded-lg"
              priority
            />
          </div>
          <Link
            href="/galleria"
            className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
            </svg>
            Guarda le foto del corso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
