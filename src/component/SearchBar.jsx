import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [formData, setFormData] = useState();
    const redirectToResult = useNavigate();

    const handleForm = (event) => {
        event.preventDefault();

        const resultInputSearchBar = event.target.search.value;

        setFormData(event.target.search.value);
        redirectToResult(`/search-result?search=${resultInputSearchBar}`)
    }

    const handleChange = (event) => {
        setFormData(event.target.value);
    };

    //console.log(formData);

    return (
        <form onSubmit={handleForm}>
            <input type="text" name="search" placeholder="Rechercher" onChange={handleChange} />
            <input type="submit" />
        </form>
    );
}

export default SearchBar;