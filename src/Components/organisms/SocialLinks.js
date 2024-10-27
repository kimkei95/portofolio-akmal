import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function SocialLinks() {
  return (
    <div className="absolute bottom-1 flex space-x-5">
      <a
        href="https://www.facebook.com/akmalalhaqi1998"
        className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-[#00abf0] text-[#00abf0] rounded-full hover:text-[#081b29] hover:bg-[#00abf0] transition-all duration-500"
      >
        <FaFacebookF className="text-xl" />
      </a>
      <a
        href="https://www.instagram.com/akmalalhaqi_"
        className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-[#00abf0] text-[#00abf0] rounded-full hover:text-[#081b29] hover:bg-[#00abf0] transition-all duration-500"
      >
        <FaInstagram className="text-xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammadakmal13/"
        className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-[#00abf0] text-[#00abf0] rounded-full hover:text-[#081b29] hover:bg-[#00abf0] transition-all duration-500"
      >
        <FaLinkedinIn className="text-xl" />
      </a>
    </div>
  );
}
