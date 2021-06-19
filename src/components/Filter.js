import React from "react";

export default function Filter() {
  return (
    <div>
      <div>
        <select className="sort-btns">
          <option value="" key="1">
            Brand
          </option>
          <option value="nike" key="2">
            Nike
          </option>
          <option value="adidas" key="3">
            Adidas
          </option>
          <option value="nobrand" key="4">
            Nobrand
          </option>
        </select>
      </div>

      <div>
        <select className="sort-btns">
          <option value="" key="1">
            Ideal for
          </option>
          <option value="men" key="2">
            Men
          </option>
          <option value="women" key="3">
            Women
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="m">M</label>
        <input id="m" type="checkbox"></input>
        <label htmlFor="s">S</label>
        <input id="s" type="checkbox"></input>
        <label htmlFor="l">L</label>
        <input id="l" type="checkbox"></input>
      </div>
    </div>
  );
}
