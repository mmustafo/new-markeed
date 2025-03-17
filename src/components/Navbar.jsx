import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-5 justify-center text-3xl py-5 bg-amber-200 w-full">
      <Link className="btn btn-warning text-xl" to="/">Home</Link>
      <Link className="btn btn-warning text-xl" to="/about">About</Link>
      <Link className="btn btn-warning text-xl" to="/contact">Contact</Link>
      <Link className="btn btn-warning text-xl" to="/product/1">Product</Link>
    </nav>
  );
}

export default Navbar;