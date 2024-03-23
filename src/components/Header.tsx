import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-1">
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          <Image
            src={logo}
            alt="logo"
            fill
            sizes="(max-width:768px) 50vw, (max-width: 1200px) 100vw, 100vw"
            className="object-container"
          />
        </div>
      </Link>
      <SearchInput />
    </div>
  );
};

export default Header;
