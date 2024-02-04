import { NavLink } from "react-router-dom";
import { Country } from "../types";

interface CountryCardProps {
	country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
	return (
		<div className="flex flex-col bg-[var(--darkBlue)] rounded-xl text-[var(--white)]">
			<div className="rounded-tr-xl rounded-tl-xl">
				<NavLink
					to={`/country/${country.alpha3Code}`}
					className={`block bg-cover bg-center h-56 rounded-tr-lg rounded-tl-lg relative overflow-hidden`}

				>
					<div
						className="absolute w-full h-full bg-center bg-cover rounded-tr-lg rounded-tl-lg transition-transform duration-500 hover:scale-110"
						style={{ backgroundImage: `url(${country.flags.svg})` }}></div>
				</NavLink>
			</div>
			<div className="p-8 pb-14">
				<h2 className="font-bold text-2xl mb-5">{country.name}</h2>
				<ul>
					<li><span className="font-bold">Population:</span> {country.population.toLocaleString()}</li>
					<li><span className="font-bold">Region:</span> {country.region}</li>
					<li><span className="font-bold">Capital:</span> {country.capital}</li>
				</ul>
			</div>
		</div>
	);
}

export default CountryCard;