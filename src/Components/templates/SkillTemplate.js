export default function SkillTemplate() {
  const skills = [
    { name: "katalon", icon: "/images/katalon.png", title: "." },
    { name: "java", icon: "/images/java.webp", title: "." },
    { name: "python", icon: "/images/python.svg", title: "." },
    { name: "postgre", icon: "/images/gajah.svg", title: "." },
  ];
  return (
    <div className="bg-[#081b29] text-[#ededed]  p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">My Skills</h2>
      <p className="mb-6">
        There are Skills that I am familiar with and confident when using them.
      </p>
      <div className="grid grid-cols-2 gap-6 text-black">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-md shadow-md"
          >
            <img src={skill.icon} alt={skill.name} className="h-12 mb-2" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
