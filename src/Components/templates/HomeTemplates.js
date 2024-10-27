import Button from "../atoms/Button";
import Text from "../atoms/Text";
import ProfileCard from "../molecules/ProfileCard";
import Header from "../organisms/Header";
import SocialLinks from "../organisms/SocialLinks";

export default function HomeTemplate() {
  return (
    <div className="bg-[#081b29] text-[#ededed] font-[Poppins] h-screen">
      <Header />
      <section className="flex items-center h-screen px-[10%]">
        <div className="max-w-xl">
          <Text variant="h1">Muhammad Akmal Al-Haqi</Text>
          <Text variant="h3">Fresh Graduate</Text>
          <Text variant="p">
            I am Muhammad Akmal Al Haqi, a Computer Science graduate from
            Multimedia Nusantara University, with hands-on experience in SAP ERP
            modules (MM, FICO, PP) during college. I interned as a full-stack
            developer at PT. Gihon Telekomunikasi Indonesia and later completed
            a bootcamp at PT. Aigen Global Teknologi, where I expanded my skills
            in JavaScript (Next.js, Tailwind CSS), backend development with
            Spring Boot, and atomic design principles.
            <p>
              In the next five years, I’m eager to grow as a Quality Assurance
              professional. My bootcamp experience highlighted QA’s crucial role
              in uniting frontend and backend for a seamless user experience.
              Issues on a website often stem from the alignment of these
              systems, and this insight fuels my commitment to ensuring every
              detail works flawlessly for users.
            </p>
          </Text>
          <div className="flex-row space-x-5 y-2">
            <Button
              href="https://drive.google.com/file/d/1JuB7LAoLctUwRtWDBFT0qdlyzaI-50Zb/view?usp=sharing"
              primary
            >
              View My CV
            </Button>
            <Button href="https://wa.me/6285921522486">Lets Talk</Button>
          </div>
        </div>
        <ProfileCard />
        <SocialLinks />
      </section>
    </div>
  );
}
