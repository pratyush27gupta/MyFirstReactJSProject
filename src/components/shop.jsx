import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    const items = await data.json();
    setItems(items);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}> {item.employee_name} </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
