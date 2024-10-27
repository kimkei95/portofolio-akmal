import React from "react";
import Image from "next/image";
const BootcampTemplate = () => {
  return (
    <div className="bg-[#081b29] text-[#ededed]  p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-center m-10">Bootcamp</h2>
      <div className="flex items-center mb-4">
        <Image
          src="/images/aigen.jpg"
          width={400}
          height={500}
          alt="Picture of the author"
          className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <p className="ml-9 text-lg leading-relaxed">
          After graduating, I joined PT. Aigen Global Teknologi bootcamp as a
          full-stack developer, where I gained hands-on experience with a range
          of technologies. I delved into Java and Spring Boot for backend
          development, used PostgreSQL for database management, and worked with
          Java and Gradle for efficient project builds. My bootcamp also covered
          API testing with Postman, frontend development with JavaScript,
          Next.js, and React, and the practical application of atomic design
          principles to create scalable, maintainable projects in Next.js.
        </p>
      </div>
    </div>
  );
};

export default BootcampTemplate;
