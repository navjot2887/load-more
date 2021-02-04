import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { itemList } from "./data";
import "./App.scss";

function App() {
	const [items, setItems] = useState([]);
	const [visible, setVisible] = useState(3);
	// fetch items on load
	useEffect(() => {
		setItems(itemList);
	}, []);

	const handleBtn = () => {
		setVisible(visible + 3);
	};

	return (
		<div className='container'>
			<Heading />
			<div className='row'>
				{items.slice(0, visible).map((item, index) => {
					return (
						<div className='col-12 col-sm-6 col-md-4 mb-4' key={index}>
							<Card {...item} />
						</div>
					);
				})}
			</div>
			<div className='row'>
				<div className='col-12 text-center mb-5'>
					{items.length > visible && (
						<button className='read-more' onClick={handleBtn}>
							Read More
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
