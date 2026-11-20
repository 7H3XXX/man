import { Timeline } from "app/components/timeline/timeline";
import { CertificationData, EducationData, ExperienceData } from "./content";
import { Metadata } from "next";
import { DEFAULT_OG } from "lib/default-og";

export const metadata: Metadata = {
  title: 'Experience',
  alternates: {
    canonical: '/experience'
  },
  openGraph: {
    ...DEFAULT_OG.openGraph,
    title: `Experience | ${DEFAULT_OG.openGraph.title}`
  }
}

export default function Experience() {
  return (
    <section className="mb-36">
      <h1 className="font-bold text-2xl mb-8">Experience</h1>
      <Timeline data={ExperienceData} />
      <h2 className="font-bold text-2xl mb-8 mt-8">Education</h2>
      <Timeline data={EducationData} />
      <h2 className="font-bold text-2xl mb-8 mt-8">Certifications</h2>
      <Timeline data={CertificationData} />
    </section>
  );
}
