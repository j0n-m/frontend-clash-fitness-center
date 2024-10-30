import { Link } from "@tanstack/react-router";

function Nav() {
  return (
    <nav className="outline px-4">
      <ul className="flex justify-between">
        <li className="left">
          <div className="logo">
            <p className="text-3xl font-bold">Clash</p>
            <p className="-mt-2 text-sm">Fitness Center</p>
          </div>
        </li>
        <li className="middle flex items-center">
          <div className="flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Gallary</Link>
            <Link to="/">Schedule</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Classes</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </li>
        <li className="right">menu</li>
      </ul>
    </nav>
  );
}

export default Nav;
