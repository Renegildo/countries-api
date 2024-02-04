import { useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import countriesData from '../data.json';

const Home = () => {
	const [query, setQuery] = useState("");
	const [areaFilter, setAreaFilter] = useState("");

	return (
		<main>
			<div className="p-10 flex flex-col gap-10 lg:flex-row lg:justify-between">
				<SearchBar setQuery={setQuery} />
				<Filter setFilter={setAreaFilter} />
			</div>
			<div className="mx-10 flex flex-col md:grid md:grid-cols-2 gap-10 lg:grid-cols-4">
				{
					(query === "" && areaFilter === "") &&
					countriesData.map((country) => (
						<CountryCard country={country} key={country.name} />
					))
				}

				{
					(query !== "" && areaFilter === "") &&
					countriesData.map((country) => (
						country.name.toLowerCase().includes(query.toLowerCase()) && <CountryCard country={country} key={country.name} />
					))
				}

				{
					(query === "" && areaFilter !== "") &&
					countriesData.map((country) => (
						country.region === areaFilter && <CountryCard country={country} key={country.name} />
					))
				}

				{
					(query !== "" && areaFilter !== "") &&
					countriesData.map((country) => (
						(country.region === areaFilter && country.name.toLowerCase().includes(query.toLowerCase())) && <CountryCard country={country} key={country.name} />
					))
				}
			</div>
		</main>
	);
}

export default Home;