import ProjectSection from "@/Components/organisms/ProjectSection";
import BootcampTemplate from "@/Components/templates/BootcampTemplate";
import ContactTemplate from "@/Components/templates/ContactTemplate";
import EducationTemplate from "@/Components/templates/EducationTemplate";
import HomeTemplate from "@/Components/templates/HomeTemplates";
import PortfolioTemplate from "@/Components/templates/PortofolioTemplate";
import SkillTemplate from "@/Components/templates/SkillTemplate";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <HomeTemplate />
      <EducationTemplate />
      <BootcampTemplate />
      <SkillTemplate />
      {/* <PortfolioTemplate /> */}
      <div className="container mx-auto p-4">
        <ProjectSection />
      </div>
      <ContactTemplate />
    </>
  );
}
