import React from "react";
import players from "./players.jsx";
import Player from "./Player.jsx";
const PlayersList = () => {
	return (
		<div className="d-flex flex-wrap justify-content-center">
			{players.map((player) => (
				<Player key={player.id} {...player} />
			))}
		</div>
	);
};

export default PlayersList;
