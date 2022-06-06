import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/products")
    .then(res => res.json())
    .then(data => setData(data))
  })
  return (
  <>
  Products : 
   {data.map((el) => {
     return <div key={el.id}>
      <p>Name : {el.name}</p>
      <p> Description : {el.description}</p>
     </div>
   })} 
  </>
  );
};

export default Products;
