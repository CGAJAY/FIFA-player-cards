import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Player = ({
	name,
	team,
	nationality,
	jerseyNumber,
	age,
	imageUrl,
}) => {
	return (
		<Card
			style={{
				width: "18rem",
				margin: "1rem",
				backgroundColor: "#f8f9fa",
			}}
		>
			<Card.Img variant="top" src={imageUrl} alt={name} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					<strong>Team:</strong> {team}
					<br />
					<strong>Nationality:</strong> {nationality}
					<br />
					<strong>Jersey Number:</strong> {jerseyNumber}
					<br />
					<strong>Age:</strong> {age}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Player;
