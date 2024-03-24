import Link from "next/link";
import React from "react";
import listPage from "@/dummydata/ListPage";

const Navbar = () => {
  return (
    <nav>
      <ul className="py-2 border-y border-gray-300">
        <li className="flex justify-center space-x-6 text-xs">
          {listPage.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.page}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
