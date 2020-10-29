import React, { useState } from 'react';
import MapContainer from '../../components/MapContainer';

const SearchPlace = () => {
	const [inputText, setInputText] = useState("");
  	const [place, setPlace] = useState("");

  	const onChange = (e) => {
    setInputText(e.target.value);
  	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPlace(inputText);
		console.log(1,place);
		setInputText("");
	};

	return (
		<>
		<form className="inputForm" onSubmit={handleSubmit}>
			<input
			placeholder="Search Place..."
			onChange={onChange}
			value={inputText}
			/>
			<button type="submit">검색</button>
		</form>
		<MapContainer searchPlace={place} />
		</>
  	);
};

export default SearchPlace;