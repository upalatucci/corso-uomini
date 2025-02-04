import React, { FC } from "react";

const Contenuti: FC = () => {
  return (
    <div className="px-10 relative z-10 overflow-hidden  pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <div className="my-4">
        <div className="flex justify-center flex-col text-center">
          <h2 className="text-3xl mb-4">Contenuti</h2>
          <p className="mb-10">
            Al corso sara&apos; centrale lo studio del Gosho &apos;Ripagare i
            debiti di gratitudine&apos; che puoi trovare{" "}
            <a
              href="https://biblioteca.sgi-italia.org/rsnd/ripagare-i-debiti-di-gratitudine"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              qui
            </a>
            . <br />
            Scarica lo studio da{" "}
            <a
              href="/ripagare_i_debiti_di_gratitudine.pdf"
              className="text-blue-600 hover:underline"
              download
            >
              qui
            </a>
          </p>
          <p>
            Inoltre condividiamo degli incoraggianti per i responsabili di
            capitolo estratti dalla Nuova Rivoluzione Umana vol. 26 capitolo
            Vessillo della Legge{" "}
            <a
              href="/nru_vol26.pdf"
              className="text-blue-600 hover:underline"
              download
            >
              scarica
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contenuti;
