import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../component/Header";
import VerificationCocktailsData from "../component/VerificationCocktailsData";
import FixedFooter from "../component/FixedFooter";

const SearchResultPage = () => {
    const { search } = useLocation();
    const [cocktailsBySearch, setCocktailBySearch] = useState();
    const searchTerm = new URLSearchParams(search).get('search');
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const cocktailsBySearchResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchTerm);
            const cocktailsBySearchResponseData = await cocktailsBySearchResponse.json();

            if (cocktailsBySearchResponseData.drinks === null) {
                // redirection vers une url inexistante pour afficher une 404
                navigate('/404-not-found')
            }

            setCocktailBySearch(cocktailsBySearchResponseData.drinks);

        })();
    }, [searchTerm])

    const props = {
        data: cocktailsBySearch,
        str: 'Les cocktails ayant ' + searchTerm + ' dans leur nom',
    }

    return (
        <>
            <Header />
            <VerificationCocktailsData props={props} />
            <FixedFooter />
        </>

    )
}

export default SearchResultPage;