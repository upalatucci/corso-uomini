import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, paragraphHTML } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 h-[70px] w-[70px] items-center justify-center rounded-md  text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        {paragraphHTML ? (
          <p
            dangerouslySetInnerHTML={{ __html: paragraphHTML }}
            className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
          />
        ) : (
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleFeature;
