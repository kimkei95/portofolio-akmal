export default function Link({ href, children, active }) {
  return (
    <a
      href={href}
      className={`text-xl font-normal text-[#ededed] hover:text-[#00abf0] ${
        active ? "text-[#00abf0]" : ""
      }`}
    >
      {children}
    </a>
  );
}
