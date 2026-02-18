import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, paragraphHTML } = feature;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-stroke bg-white p-6 shadow-one transition-all duration-200 hover:border-primary/30 hover:shadow-two md:p-7">
      <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
        <span className="flex items-center justify-center [&_svg]:h-9 [&_svg]:w-9 [&_svg]:shrink-0 [&_svg]:max-h-full [&_svg]:max-w-full">
          {icon}
        </span>
      </div>
      <h3 className="mb-3 text-xl font-bold text-primary sm:text-2xl">
        {title}
      </h3>
      {paragraphHTML ? (
        <div
          dangerouslySetInnerHTML={{ __html: paragraphHTML }}
          className="informazioni-content flex-1 text-base leading-relaxed text-body-color [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/40 [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:decoration-primary [&_strong]:font-semibold [&_strong]:text-dark"
        />
      ) : (
        <p className="flex-1 text-base leading-relaxed text-body-color">
          {paragraph}
        </p>
      )}
    </article>
  );
};

export default SingleFeature;
