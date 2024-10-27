import Link from "../atoms/Link";
import NavBar from "../molecules/Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-5 px-[10%] bg-blue-900 flex items-center justify-between z-10">
      <Link href="/" className="text-4xl font-semibold text-[#ededed]">
        Muhammad Akmal Al Haqi
      </Link>
      <NavBar />
    </header>
  );
}
