"use client";

import React, { FC } from "react";
import SectionTitle from "../Common/SectionTitle";
import { things } from "./things";
import useThingsToBring from "./useThingsToBring";

const ThingsToBring: FC = () => {
  const [thingsChecked, toggleId] = useThingsToBring();

  return (
    <section id="cose-da-portare" className="bg-defaultBg py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Prepariamoci al corso" center />

        <div className="mx-auto flex justify-center">
          <a
            className="text-primary hover:underline"
            download
            href="/pdf/mappa.pdf"
          >
            Scarica la mappa INTERATTIVA di Salerno. Clicca sulle icone!!
          </a>
        </div>

        <div className="mx-auto flex justify-center">
          <a
            className="text-primary hover:underline"
            download
            href="/pdf/mappashotelstampa.pdf"
          >
            E anche la mappa dell&apos;hotel
          </a>
        </div>
        <h3 className="text-center font-bold mt-8 mb-6 text-primary">
          Hai fatto la valigia?
        </h3>

        <ul className="mx-auto max-w-xl space-y-3">
          {things.map((cosa) => {
            const isChecked = thingsChecked?.includes(cosa.id);
            return (
              <li key={cosa.id}>
                <label
                  className={`
                    flex cursor-pointer items-start gap-4 rounded-xl border px-4 py-3.5
                    transition-all duration-200
                    ${isChecked
                      ? "border-primary/40 bg-primary/5"
                      : "border-stroke bg-white hover:border-primary/30 hover:bg-gray-light/80"
                    }
                  `}
                >
                  <span className="relative mt-0.5 flex shrink-0">
                    <input
                      type="checkbox"
                      name={cosa.id.toString()}
                      checked={isChecked}
                      onChange={() => toggleId(cosa.id)}
                      className="
                        h-5 w-5 shrink-0 cursor-pointer rounded-md border-2 border-primary/60
                        text-primary accent-primary
                        focus:ring-2 focus:ring-primary/30 focus:ring-offset-2
                        transition-colors
                      "
                    />
                  </span>
                  <span
                    className={`text-body-color ${isChecked ? "line-through opacity-75" : ""}`}
                  >
                    {cosa.title}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ThingsToBring;
