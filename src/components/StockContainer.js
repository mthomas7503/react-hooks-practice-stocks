import React from "react";
import Stock from "./Stock";


function StockContainer({ stocks, handleClickEvent}) {

  
  
  const stockList = stocks.map((stock) => <Stock handleClick={handleClickEvent} data={stock} key={stock.id}/>)

 
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
