import { useEffect } from "react";

const Pads = () => {
	return (
		<div
			id="drum-pads"
			className="grid grid-cols-3 
                gap-4 md:gap-6 lg:gap-8
                p-6 md:p-8 lg:p-10
                "
		>
			<Pad
				id="Heater-1"
				letter="Q"
				keycode="81"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
			/>
			<Pad
				id="Heater-2"
				letter="W"
				keycode="87"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
			/>
			<Pad
				id="Heater-3"
				letter="E"
				keycode="69"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
			/>
			<Pad
				id="Heater-4"
				letter="A"
				keycode="65"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
			/>
			<Pad
				id="Clap"
				letter="S"
				keycode="83"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
			/>
			<Pad
				id="Hi-Hat"
				letter="D"
				keycode="68"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
			/>
			<Pad
				id="Kick-nHat"
				letter="Z"
				keycode="90"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
			/>
			<Pad
				id="Kick"
				letter="X"
				keycode="88"
				sound="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
			/>
			<Pad
				id="Closed-Hi-Hat"
				letter="C"
				keycode="67"
				sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
			/>
		</div>
	);
};

const Pad = ({ id, letter, sound }) => {
	// add event listener to the document to listen for keydown events
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	});

	// handle keydown event
	const handleKeyDown = (e) => {
		if (e.keyCode === letter.charCodeAt(0)) {
			playSound(sound);
		}
	};

	// plays sound, adds class to the pad, and removes class after a second
	const playSound = () => {
		const audio = document.getElementById(letter);
		audio.currentTime = 0;
		audio.play();

		// add class to the pad to animate
		addClassActive();

		// update display text when pad is clicked
		updateDisplayText(id);
	};

	// add class active
	const addClassActive = () => {
		const pad = document.getElementById(id);
		pad.classList.add("active");
		setTimeout(() => {
			pad.classList.remove("active");
		}, 100);
	};

	// update display text
	const updateDisplayText = (id) => {
		const displayText = document.getElementById("display-text");
		displayText.innerHTML = `${id}`;
	};

	return (
		<button
			id={id}
			keytrigger={letter}
			className="drum-pad 
            rounded-lg font-bold 
            text-2xl md:text-3xl lg:text-4xl
            p-3 md:p-4 lg:p-5
            bg-blue-900 dark:bg-blue-400
            text-blue-400 dark:text-blue-900
            hover:bg-pink-600 dark:hover:bg-pink-700
            hover:text-pink-200 dark:hover:text-pink-300 
            hover:scale-110 active:scale-90 
            select-none"
			onClick={() => playSound(sound)}
			onKeyDown={(e) => handleKeyDown(e)}
		>
			<audio className="clip" id={letter} src={sound} />
			<p>{letter}</p>
		</button>
	);
};

export default Pads;
