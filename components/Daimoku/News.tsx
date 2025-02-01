import React, { FC } from "react";

const News: FC = () => {
  return (
    <div className="w-full md:w-2/3 mb-10 md:border-r-gray-400 md:border-r-8 p-4">
      <div className="flex justify-center align-middle">
        <span className="text-4xl text-primary font-bold">
          Prossimamente pubblichere in questo spazio le varie news! Stay tuned!
        </span>
      </div>
    </div>
  );
};

export default News;
