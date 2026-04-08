import Hero from "@/components/home/hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import LatestProjects from "@/components/home/LatestProjects";
import TechStack from "@/components/home/Techstack";

export default function page() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <LatestProjects />
      <TechStack />
    </>
  );
}
