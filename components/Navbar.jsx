import Link from "next/link";

const Navbar = () => (
  <nav className="text-center font-bold bg-lime-100 py-2">
    <Link href="/">
      <a className="no-underline text-3xl">Naayi Taaza</a>
    </Link>
  </nav>
);

export default Navbar;
