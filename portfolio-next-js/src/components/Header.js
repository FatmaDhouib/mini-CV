
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="logo" href="/" aria-label="Fatma Dhouib home">
          FD
        </Link>

        <ul className="nav-links">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#experience">Experience</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
