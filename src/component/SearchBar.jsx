import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [formData, setFormData] = useState();
    const redirectToResult = useNavigate();

    const handleForm = (event) => {
        event.preventDefault();

        const resultInputSearchBar = event.target.search.value;

        setFormData(event.target.search.value);
        redirectToResult('/search-result')
    }

    console.log(formData);

    return (
        <form onSubmit={handleForm}>
            <input type="text" name="search" placeholder="Rechercher" />
            <input type="submit" />
        </form>
    );
}

export default SearchBar;