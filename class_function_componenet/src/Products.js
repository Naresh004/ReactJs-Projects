import React from 'react';

const Products = ({data}) => {
  return (
    <div>
      {data.map(data => <img src={data.recipe.image}></img>)}
      {/* <p>TotalAmount of calories :{data.recipe.label}</p> */}
    </div>
    
  );
}

export default Products;
