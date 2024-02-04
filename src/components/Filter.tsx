interface FilterProps {
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ setFilter }: FilterProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	}

	return (
		<select
			onChange={(e) => handleChange(e)}
			className="bg-[var(--darkBlue)] text-[var(--white)] py-3 px-5 rounded-lg cursor-pointer"
			defaultValue={"Filter by Region"}
		>
			<option value="Filter by Region" disabled>Filter by Region</option>
			<option value="">All</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
}

export default Filter;