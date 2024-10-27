import React from "react";
import Image from "next/image";
export default function EducationTemplate() {
  return (
    <div className="bg-[#081b29] text-[#ededed]  p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-center m-10">Education</h2>
      <div className="flex items-center mb-4">
        <Image
          src="/images/umn.jpg"
          width={400}
          height={500}
          alt="Picture of the author"
          className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
        />

        <p className="ml-9 text-lg  leading-relaxed">
          I graduated from Multimedia Nusantara University with a degree in
          Computer Science, achieving a final GPA of <strong>2.94</strong>.
          Throughout my studies, I gained solid foundations in programming,
          algorithms, and systems design. My time at university helped me build
          critical thinking skills and a strong technical background.
        </p>
      </div>
    </div>
  );
}
