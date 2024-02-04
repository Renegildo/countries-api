import ToggleTheme from "./ToggleTheme";

const Header = () => {
	return (
		<header className="flex justify-between px-5 py-5 text-[var(--white)] items-center bg-[var(--darkBlue)]">
			<h1 className="text-lg font-bold">Where in the world?</h1>
			<ToggleTheme />
		</header>
	);
}

export default Header;