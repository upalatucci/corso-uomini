import { goals } from "@/components/Goals/goals";
import GoalsForm from "@/components/Goals/GoalsForm";
import React, { FC } from "react";

const Goals: FC = () => {
  const randomOrderGoals = goals
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="bg-defaultBg relative z-10 overflow-hidden px-4 pb-8 pt-[120px] md:px-10 md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <GoalsForm />

      <section
        className="flex flex-wrap container my-4 justify-center"
        id="obiettivi-membri-shuffle"
      >
        {randomOrderGoals.map((goal) => (
          <div
            className="max-w-sm rounded m-4 overflow-hidden shadow-lg"
            key={goal}
          >
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-primary">Obiettivo</div>
              <p className="text-base text-body-color">{goal} </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Goals;
