import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchitem = await fetch(
      `http://dummy.restapiexample.com/api/v1/employee/${match.params.id}`
    );
    const item = await fetchitem.json();
    setItem(item);
  };

  return (
    <div>
      <h1>Name: {item.employee_name}</h1>
      <h2>Salary: {item.employee_salary}</h2>
      <h2>Age: {item.employee_age}</h2>
      <h2>Id: {item.id}</h2>
    </div>
  );
}

export default ItemDetail;
