"use client";
import React, { FormEvent, useState } from "react";
import { Icon } from "@iconify/react";

const SearchInput = () => {
  const [keyword, setKeyword] = useState<string>("");
  const searchKeyword = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword) {
      window.location.href = "/";
    } else {
      window.location.href = `/search?q=${keyword}`;
    }
  };

  return (
    <form className="flex space-x-2 items-center" onSubmit={searchKeyword}>
      <input
        type="text"
        placeholder="e.g. sports, lifestyle"
        className="text-sm px-2 py-1 outline-none border border-black"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">
        <Icon
          icon="material-symbols-light:search"
          className="text-black text-xl"
        />
      </button>
    </form>
  );
};

export default SearchInput;
