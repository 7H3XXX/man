import { Timeline } from "app/components/timeline/timeline";
import { EducationData, ExperienceData } from "./content";

export default function Experience() {
  return (
    <section className="mb-36">
      <h2 className="font-bold text-2xl mb-8">Experience</h2>
      <Timeline data={ExperienceData} />
      <h2 className="font-bold text-2xl mb-8 mt-8">Education</h2>
      <Timeline data={EducationData} />
    </section>
  );
}
