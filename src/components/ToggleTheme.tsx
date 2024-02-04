import { useState } from "react";

const ToggleTheme = () => {
	const [theme, setTheme] = useState("dark");

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (theme === "dark") {
			e.target.innerText = "Dark";
			document.body.style.setProperty('--veryDarkBlue', 'hsl(0, 0%, 90%)');
			document.body.style.setProperty('--darkBlue', 'hsl(255, 100%, 100%)');
			document.body.style.setProperty('--white', 'hsl(200, 15%, 8%)');
			setTheme("light");
		} else {

			e.target.innerText = "Light";
			document.body.style.setProperty('--veryDarkBlue', 'hsl(207, 26%, 17%)');
			document.body.style.setProperty('--darkBlue', 'hsl(209, 23%, 22%)');
			document.body.style.setProperty('--white', 'hsl(255, 100%, 100%)');
			setTheme("dark");
		}
	}

	return (
		<button onClick={(e) => handleClick(e)}>
			Light
		</button>
	);
}

export default ToggleTheme;