import React from "react";

export default function SortBy() {
  return (
    <div>
      <select className="sort-btns">
        <option value="" key="1">
          Sort by Price
        </option>
        <option value="Lowest" key="2">
          Lowest - Highest
        </option>
        <option value="Highest" key="3">
          Highest - Lowest
        </option>
      </select>
    </div>
  );
}
