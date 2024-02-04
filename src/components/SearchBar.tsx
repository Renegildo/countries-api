import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setQuery }: SearchBarProps) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>
	) => {
		setQuery(e.target.value);
	}

	return (
		<form className="flex lg:w-[50rem]">
			<button
				type="submit"
				className="h-14 bg-[var(--darkBlue)] text-[var(--white)] px-5 rounded-tl-lg rounded-bl-lg"
			>
				<FaSearch />
			</button>
			<input
				type="text"
				placeholder="Search for a country..."
				className="bg-[var(--darkBlue)] rounded-tr-lg rounded-br-lg w-full text-white"
				onChange={(e) => handleInputChange(e)}
			/>
		</form>
	);
}

export default SearchBar;