import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-300 mt-2 rounded w-[1500px] flex items-center justify-around ml-2">
        <ul className="flex items-end justify-center gap-10">
          <li>
            <Link to={"/"} className="text-2xl hover:text-slate-200">
              Post
            </Link>
          </li>
          <li>
            <Link to={"/newpost"} className="text-2xl">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
