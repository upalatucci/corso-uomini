import GoalsForm from "@/components/Goals/GoalsForm";
import React, { FC } from "react";

const Goals: FC = () => {
  return (
    <div className="px-10 relative z-10 overflow-hidden bg-white pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <GoalsForm />
    </div>
  );
};

export default Goals;
