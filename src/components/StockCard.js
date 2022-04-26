import React from "react";

const StockCard = (props) => {

	const stock = props.stock;

	return(
		<div className="card-container">
			<div className="desc">
				<h2> {stock._id} </h2>
				<p>{stock.name}</p>
			</div>
		</div>
	)
};

export default StockCard;
