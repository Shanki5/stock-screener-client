import React from "react";

const StockCard = (props) => {

	const stock = props.stock;

	return(
		<div className="stock-card-container">
			<h2> {stock.companyName} </h2>
		</div>
	)
};

export default StockCard;
