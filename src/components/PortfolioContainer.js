import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myData, handleRemove}) {

  
  const boughtStocks = myData.map((data) => <Stock handleRemove={handleRemove} key={data.price} data={data}/>)
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStocks}
    </div>
  );
}

export default PortfolioContainer;
