// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayerList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Football Player Cards</h1>
			</header>
			<PlayersList />
		</div>
	);
}

export default App;
