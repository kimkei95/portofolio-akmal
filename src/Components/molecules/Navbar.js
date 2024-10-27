import Link from "../atoms/Link";

export default function NavBar() {
  return (
    <nav className="flex space-x-8">
      <Link href="/">Home</Link>
      <Link href="#">Education</Link>
      <Link href="#">Skill</Link>
      <Link href="#">Portofolio</Link>
      <Link href="#">Contact</Link>
    </nav>
  );
}
