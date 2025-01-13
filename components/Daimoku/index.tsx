"use client";
import useDaimoku from "@/hooks/useDaimoku";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const daimokuTextStyle = {
  background: "-webkit-linear-gradient(45deg, #09009f, #00ff95 80%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "64px",
  padding: "1rem 0",
  "@media (minWidth: 768px)": { fontSize: "120px" },
};

function usePrevious(value: number) {
  const ref = useRef<number>(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current || 0;
}

const animationDuration = 500;

const Daimoku = () => {
  const [daimoku] = useDaimoku();
  const [modalOpen, setModalOpen] = useState(false);

  const previousDaimoku = usePrevious(daimoku);
  const daimokuContainer = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!daimokuContainer.current || daimokuContainer.current === null) return;

    let startTimestamp: number = 0;
    const step = (timestamp: number) => {
      if (!daimokuContainer.current) return;
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / animationDuration,
        1
      );
      daimokuContainer.current.innerHTML = Math.floor(
        progress * (daimoku - previousDaimoku) + previousDaimoku
      ).toString();

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [daimoku, previousDaimoku]);

  return (
    <section id="daimoku" className="overflow-hidden py-4 md:py-20 lg:py-4">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto text-center">
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Obiettivi
              </h2>

              <ul className="mb-10">
                <li className="mb-4">
                  sfidarsi a recitare almeno 60’ di Daimoku al giorno
                </li>

                <li>
                  Studiare insieme il Gosho Ripagare i debiti di gratitudine
                </li>
              </ul>
            </div>
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h2
                style={daimokuTextStyle}
                ref={daimokuContainer}
                className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl"
              >
                0
              </h2>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="shadow-submit rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Aggiungi Daimoku
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen} />
    </section>
  );
};

export default Daimoku;
