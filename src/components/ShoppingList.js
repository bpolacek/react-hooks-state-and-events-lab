import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory] = useState("All")
  let filterItems=items.filter((item)=> selectedCategory === item.category || selectedCategory === "All");
  const changeSelectedCategory = (e)=>{
    setSelectedCategory(e.target.value)
    console.log(e.target.value)
    console.log(selectedCategory)
    filterItems = items.filter((item)=> selectedCategory === item.category || selectedCategory === "All")
    console.log(filterItems)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeSelectedCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
