import React from "react";
import PlayersList from "./components/playersList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div>
			<h1 className="text-center">Player List</h1>
			<PlayersList />
		</div>
	);
};

export default App;
