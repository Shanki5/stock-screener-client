import React, {Component} from "react";	
import axios from 'axios'
import StockCard from './StockCard';

class StockDashboard extends Component {

	constructor(props) {

		super(props);
		this.state = {
			stocks: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:8082/api/stocks')
			.then(res => {
				this.setState({
					stocks: res.data
				})
				console.log(res.data);
			})
			.catch(err => {
				console.log('Error from StockDashboard');
			})
	};

	render() {
		const stocks = this.state.stocks;
		console.log("PrintStocks: " + stocks);
		let stocklist;

		if(!stocks) {
			stocklist = 'There is no stock in database!';
		} else {
			stocklist = stocks.map((stock, k) => 
				<StockCard stock={stock} key={k} />
			);
		}

		return (
			<div className="StockDashboard">
				<div className="container">
					<div className="list">
						{stocklist}
					</div>
				</div>
			</div>
		);
	}
}


export default StockDashboard;
