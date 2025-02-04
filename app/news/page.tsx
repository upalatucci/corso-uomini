import React, { FC } from "react";

const News: FC = () => {
  return (
    <div className="px-10 relative z-10 overflow-hidden  pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <section className="flex flex-wrap container my-4 justify-center">
        <h2 className="text-3xl mb-4">
          Le news verranno pubblicate in questa pagina
        </h2>
      </section>
    </div>
  );
};

export default News;
