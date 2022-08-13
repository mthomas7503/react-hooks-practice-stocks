import React from "react";

function Stock({ data, handleClick, handleRemove }) {

  const { name, price, ticker } = data
  return (
    <div onClick={handleRemove ? handleRemove : handleClick} >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
