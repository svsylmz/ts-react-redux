import React from "react";
import { useRouter } from "next/router";
import Select from "react-select";
import { SortOptions } from "@/interfaces/sortOptions";

export default function Sidebar() {
  const sortOptions: SortOptions[] = [
    {
      id: 1,
      value: "Popularity Descending",
      label: "Popularity Descending",
    },
    {
      id: 2,
      value: "Popularity Ascending",
      label: "Popularity Ascending",
    },
    {
      id: 3,
      value: "Rating Descending",
      label: "Rating Descending",
    },
    {
      id: 4,
      value: "Rating Ascending",
      label: "Rating Ascending",
    },
  ];

  //I couldn't see the filtering part in the api

  return (
    <div className="tmdb-sidebar">
      <div className="tmdb-sidebar__sort border rounded p-2 bg-white pb-4">
        <div className="sort-title font-bold h-10 flex items-center border-b">
          Sort
        </div>
        <p className="mb-2 mt-2 text-sm">Sort Results By</p>
        <Select
          instanceId={1}
          options={sortOptions}
          defaultValue={sortOptions[0]}
          id="tmdbSort"
        />
        {/* instanceId for react-select hydrate fix */}
      </div>
      <div className="tmdb-sidebar__sort-button">
        <button className="w-full h-12 mt-5 rounded-full bg-sky-400 text-white font-medium text-lg">
          Search
        </button>
      </div>
    </div>
  );
}
