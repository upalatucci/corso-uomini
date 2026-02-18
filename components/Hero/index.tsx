import Image from "next/image";

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
        </div>
      </div>
    </section>
  );
};

export default Hero;
