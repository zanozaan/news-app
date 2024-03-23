import { getNewsSearch } from "@/api";
import Article from "@/components/Article";
import { removeDuplicateData } from "@/utils";
import React from "react";

const Technology = async () => {
  const newsTechnology = await getNewsSearch("technology");
  const filterArticles = removeDuplicateData(newsTechnology);

  return (
    <div className="w-[700px]">
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Technology;
