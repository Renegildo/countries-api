import { NavLink, useParams } from "react-router-dom";

import countriesData from '../data.json';

import { Currency, Language } from "../types";
import CountryBoardButton from "../components/CountryBoardButton";
import { FaArrowLeft } from "react-icons/fa";

const CountryDetails = () => {
	const { countryCode } = useParams();

	const country = countriesData.filter(country => country.alpha3Code === countryCode)[0];

	const formatCurrencies = (currencies: Currency[]) => {
		return currencies.map(currency => `${currency.name} (${currency.symbol})`).join(', ');
	}

	const formatLanguages = (languages: Language[]) => {
		return languages.map(language => `${language.name}`).join(', ');
	}

	return (
		<main>
			<NavLink
				to="/"
				className="inline-flex items-center gap-2 py-3 px-5 bg-[var(--darkBlue)] mt-10 ml-5 text-[var(--white)] hover:bg-[var(--veryDarkBlue)] outline-[var(--darkBlue)] outline transition-colors duration-300"
			>
				<FaArrowLeft />Back
			</NavLink>
			<div className="text-[var(--white)] flex flex-col lg:flex-row lg:gap-10 px-10 mb-10 lg:mt-10">
				<div className="mt-20 rounded-md mb-10 lg:max-w-[48rem] lg:mt-0">
					<img
						src={country.flag}
						alt={`${country.name} flag`}
						className="rounded-md"
					/>
				</div>
				<div>
					<h1 className="text-3xl font-bold mb-5">{country.name}</h1>
					<ul className="flex flex-col gap-2 mb-10">
						<li><span className="font-bold">Native Name</span>: {country.nativeName}</li>
						<li><span className="font-bold">Population</span>: {country.population.toLocaleString()}</li>
						<li><span className="font-bold">Region</span>: {country.region}</li>
						<li><span className="font-bold">Sub Region</span>: {country.subregion}</li>
						<li><span className="font-bold">Capital</span>: {country.capital}</li>
					</ul>
					<ul className="flex flex-col gap-2">
						<li><span className="font-bold">Top Level Domain</span>: {country.topLevelDomain}</li>
						<li><span className="font-bold">Currencies</span>: {formatCurrencies(country.currencies!)}</li>
						<li><span className="font-bold">Languages</span>: {formatLanguages(country.languages)}</li>
					</ul>

					<h2 className="mt-20 text-xl font-bold mb-5 lg:mt-10">Border Countries:</h2>

					<div className="flex flex-wrap gap-3 items-center justify-center">
						{
							country.borders?.map((countryCode) => (
								<CountryBoardButton countryCode={countryCode} key={countryCode} />
							))
						}
					</div>
				</div>
			</div>
		</main>
	);
}

export default CountryDetails;