import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import ThingsToBring from "./ThingsToBring";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <ThingsToBring />
      <section id="maggiori-info" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Informazioni generali" center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 xs:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
