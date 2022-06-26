import useDarkMode from "../hooks/useDarkMode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<header className="w-full fixed top-0 text-right p-2">
			<ToggleDarkMode />
		</header>
	);
};

const ToggleDarkMode = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<button
			title="Toggle Light/Dark Mode"
			className="
				bg-blue-900 dark:bg-blue-400 
                hover:bg-pink-600 dark:hover:bg-pink-700
				text-blue-300 dark:text-blue-900
                hover:text-pink-200 dark:hover:text-pink-300 
				rounded-lg p-3 m-1 font-bold hover:scale-110 active:scale-90"
			onClick={handleMode}
		>
			{darkTheme ? (
				<span>
					<FontAwesomeIcon icon={faSun} /> light
				</span>
			) : (
				<span>
					<FontAwesomeIcon icon={faMoon} /> dark
				</span>
			)}
		</button>
	);
};

export default Header;
