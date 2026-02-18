const ObiettiviCards = [
  "Sfidarsi a recitare almeno 60' di Daimoku al giorno",
  "Sfidarsi a realizzare uno shakubuku entro la data del corso",
];

const Obiettivi = () => {
  return (
    <div id="obiettivi" className="w-full scroll-mt-24">
      <h2 className="mb-10 text-center text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
        Obiettivi
      </h2>
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {ObiettiviCards.map((text) => (
          <div
            key={text}
            className="rounded-2xl bg-white/80 px-6 py-5 text-center shadow-one md:px-8 md:py-6"
          >
            <p className="text-base font-medium text-dark md:text-lg">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Obiettivi;
