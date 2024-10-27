import ProjectSection from "@/Components/organisms/ProjectSection";
import BootcampTemplate from "@/Components/templates/BootcampTemplate";
import ContactTemplate from "@/Components/templates/ContactTemplate";
import EducationTemplate from "@/Components/templates/EducationTemplate";
import HomeTemplate from "@/Components/templates/HomeTemplates";

import SkillTemplate from "@/Components/templates/SkillTemplate";

export default function Home() {
  return (
    <>
      <HomeTemplate />
      <EducationTemplate />
      <BootcampTemplate />
      <SkillTemplate />

      <div className="container mx-auto p-4">
        <ProjectSection />
      </div>
      <ContactTemplate />
    </>
  );
}
