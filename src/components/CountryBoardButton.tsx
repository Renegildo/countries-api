import { NavLink } from "react-router-dom";

import countryData from '../data.json';

interface CountryBoardButtonProps {
	countryCode: string;
}

const CountryBoardButton = ({ countryCode }: CountryBoardButtonProps) => {
	const getCountryFromCode = (code: string) => {
		return countryData.filter((country) => code === country.alpha3Code)[0];
	}

	const formatCountryName = (name: string) => {
		if (name.length > 10) return `${name.slice(0, 11)}...`;
		return name;
	}

	return (
		<NavLink
			to={`/country/${countryCode}`}
			className="bg-[var(--darkBlue)] py-3 w-28 text-center inline-block hover:bg-[var(--veryDarkBlue)] outline-[var(--darkBlue)] outline transition-colors duration-300"
		>
			{formatCountryName(getCountryFromCode(countryCode).name)}
		</NavLink>
	);
}

export default CountryBoardButton;