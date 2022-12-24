import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import contacts from "../contacts";

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			<Card
				name={contacts[0].name}
				img={contacts[0].img}
				contact={contacts[0].contact}
				email={contacts[0].email}
			/>
			<Card
				name={contacts[1].name}
				img={contacts[1].img}
				contact={contacts[1].contact}
				email={contacts[1].email}
			/>
			<Card
				name={contacts[2].name}
				img={contacts[2].img}
				contact={contacts[2].contact}
				email={contacts[2].email}
			/>
		</div>
	);
}

export default App;
