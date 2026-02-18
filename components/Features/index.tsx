import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import ThingsToBring from "./ThingsToBring";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="maggiori-info" className="bg-defaultBg py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Informazioni generali" center mb="3rem" />

          <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      <ThingsToBring />
    </>
  );
};

export default Features;
