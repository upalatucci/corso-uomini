import News from "./News";
import Obiettivi from "./Obiettivi";
import Link from "next/link";

const MaterialeStudio = () => (
  <section className="w-full">
    <h2 className="mb-6 text-center text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
      Materiale di studio
    </h2>
    <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-body-color md:text-lg">
      Il corso sarà incentrato sul Volume 10 della Rivoluzione Umana, in
      particolare i capitoli &quot;Determinazione&quot; e &quot;Batticuore&quot;.
      Di seguito il link per leggere le puntate sul sito del Nuovo Rinascimento.
    </p>
    <div className="mt-8 flex justify-center">
      <Link
        href="https://ilnuovorinascimento.org/c/la-rivoluzione-umana"
        target="_blank"
        className="inline-block rounded-xl bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
      >
        Tutte le puntate
      </Link>
    </div>
  </section>
);

const Daimoku = () => {
  return (
    <section
      id="daimoku"
      className="overflow-hidden bg-defaultBg py-16 md:py-20 lg:py-24"
    >
      <div className="container flex flex-col gap-20">
        <News />
        <Obiettivi />
        <MaterialeStudio />
      </div>
    </section>
  );
};

export default Daimoku;
