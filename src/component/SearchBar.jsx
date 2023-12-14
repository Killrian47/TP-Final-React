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
        <form onSubmit={handleForm} className="d-flex gap-2 justify-content-center">
            <input type="text" name="search" placeholder="Rechercher cocktails" onChange={handleChange} className="form-control w-75" />
            <input type="submit" className="btn btn-primary" />
        </form>
    );
}

export default SearchBar;