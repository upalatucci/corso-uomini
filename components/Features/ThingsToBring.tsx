"use client";

import React, { FC } from "react";
import SectionTitle from "../Common/SectionTitle";
import { things } from "./things";
import useThingsToBring from "./useThingsToBring";

const ThingsToBring: FC = () => {
  const [thingsChecked, toggleId] = useThingsToBring();

  return (
    <section id="cose-da-portare" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Cose da portare" center />

        <div className="mx-auto flex justify-center">
          <ul>
            {things.map((cosa) => (
              <li key={cosa.id} className="my-4">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    className="pr-4"
                    name={cosa.id.toString()}
                    checked={thingsChecked?.includes(cosa.id)}
                    onChange={() => toggleId(cosa.id)}
                  />{" "}
                  {cosa.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThingsToBring;
