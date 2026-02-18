"use client";
import React, { useEffect, useState } from "react";

const MINUTES_IN_MS = 1000 * 60;
const HOURS_IN_MS = 60 * MINUTES_IN_MS;
const DAYS_IN_MS = 24 * HOURS_IN_MS;

const CountDown = () => {
  const [, setTic] = useState(0);
  const now = new Date();
  const courseDate = new Date(2026, 2, 27, 9, 0); // 27 Marzo 2026
  const deltaTime = courseDate.getTime() - now.getTime();

  const isPast = deltaTime <= 0;
  const absDelta = Math.abs(deltaTime);

  const deltaDays = Math.floor(absDelta / DAYS_IN_MS);
  const remainingHours = absDelta % DAYS_IN_MS;
  const deltaHours = Math.floor(remainingHours / HOURS_IN_MS);
  const remainingMinutes = remainingHours % HOURS_IN_MS;
  const deltaMinutes = Math.floor(remainingMinutes / MINUTES_IN_MS);

  useEffect(() => {
    const id = setInterval(() => setTic((t) => t + 1), MINUTES_IN_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-defaultBg py-10 text-center">
      <h3 className="mb-6 text-xl font-bold text-primary md:text-2xl">
        {isPast ? "IL CORSO È TERMINATO" : "MANCANO AL CORSO"}
      </h3>
      <div className="countdown mx-auto flex max-w-2xl justify-center gap-6 md:gap-12">
        <div className="time">
          <h2 className="text-4xl font-bold text-primary md:text-6xl">
            {deltaDays}
          </h2>
          <small>Giorni</small>
        </div>
        <div className="time">
          <h2 className="text-4xl font-bold text-primary md:text-6xl">
            {deltaHours}
          </h2>
          <small>Ore</small>
        </div>
        <div className="time">
          <h2 className="text-4xl font-bold text-primary md:text-6xl">
            {deltaMinutes}
          </h2>
          <small>Minuti</small>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
