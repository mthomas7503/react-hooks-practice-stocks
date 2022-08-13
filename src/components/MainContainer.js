import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stockData, setStockData] = useState([])
const [myStockData, setMyStockData] = useState([])

useEffect(
  () => fetch('http://localhost:3001/stocks')
  .then((res)=> res.json())
  .then(response => setStockData(response)), []
)

function handleStockClick(event) {
  fetch(`http://localhost:3001/stocks?name=${event.target.innerText}`)
  .then(resp=>resp.json())
  .then(result=>{if(myStockData.length < 1) {console.log(event); setMyStockData(result)} else if (myStockData.length >= 1){setMyStockData([...myStockData, ...result])}})
  .catch(err => alert(err))
}

function handleRemoveStock(e) {
  const newStock = myStockData.filter(data => data.name !== e.target.innerText);
  setMyStockData(newStock)
}

function handleChange(e) {
  fetch('http://localhost:3001/stocks')
  .then((res)=> res.json())
  .then(response => {const filteredData=response.filter(data => data.type === e.target.value);
  setStockData(filteredData)})
}

function handleAlphabetSort() {
 const sortedData = stockData.sort((a,b) => {
    const stockNameA = a.name.toUpperCase();
    const stockNameB = b.name.toUpperCase();

    if(stockNameA < stockNameB) {return -1; }
    if(stockNameA > stockNameB) {return 1};
    return 0
  });

  console.log(sortedData.map(data => data))
  setStockData(sortedData.map(data => data));
}

function handlePriceSort(e) {
  const priceFilter = stockData.sort((a,b) => a.price - b.price);
  setStockData(priceFilter.map(data => data));
}


  return (
    <div>
      <SearchBar handleFilter={handleChange} onSort={handlePriceSort} handleAlphabet={handleAlphabetSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stockData} handleClickEvent={handleStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer handleRemove={handleRemoveStock} myData={myStockData}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
