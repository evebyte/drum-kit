import React from "react";
import "./App.css";
import Header from "./components/Header";
import DrumMachine from "./components/DrumMachine";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<DrumMachine />
			<Footer />
		</div>
	);
}

export default App;
