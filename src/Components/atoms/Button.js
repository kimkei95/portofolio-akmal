export default function Button({ href, children, primary, websitelink }) {
  const baseStyles =
    "inline-flex items-center justify-center w-36 h-10 font-semibold text-lg rounded-md border-2 transition-all duration-500";
  const primaryStyles = primary
    ? "bg-[#00abf0] text-[#081b29] border-[#00abf0] hover:text-[#00abf0] hover:bg-transparent"
    : "bg-transparent text-[#00abf0] border-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29]";
  return (
    <a href={href} target="_blank" className={`${baseStyles} ${primaryStyles}`}>
      {children}
    </a>
  );
}
