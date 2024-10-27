import React from "react";

export default function ContactTemplate() {
  return (
    <section className="flex items-center justify-center h-screen bg-[#081b29] text-[#ededed]">
      <div className="max-w-lg text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out if you would like to discuss potential
          projects, job opportunities, or just to connect.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:akmalyadong@gmail.com"
            className="inline-block bg-[#00abf0] text-[#081b29] px-6 py-3 rounded-md font-semibold hover:bg-transparent hover:text-[#00abf0] border-2 border-[#00abf0] transition duration-300"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/6285921522486"
            className="inline-block bg-transparent text-[#00abf0] px-6 py-3 rounded-md font-semibold border-2 border-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition duration-300"
          >
            Lets Chat
          </a>
        </div>
      </div>
    </section>
  );
}
