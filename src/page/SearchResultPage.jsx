import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../component/Header";

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

    //console.log(cocktailsBySearch);


    return (
        <>
            <Header />
            {cocktailsBySearch ? (
                <>
                    <h3 className="text-center mt-3">Les cocktails ayant dans leur noms : {searchTerm}</h3>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {cocktailsBySearch.map((cocktail) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-12 col-lg-5">
                                    <h4>Nom : {cocktail.strDrink}</h4>
                                    <img className="mb-3" src={cocktail.strDrinkThumb} alt={`image du cocktail : ${cocktail.strDrink}`} width={300} height={300} />
                                    <Link to={`/cocktail/detail/${cocktail.idDrink}`} className="link-to">
                                        <p>Voir plus de détails</p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </>

            ) : (
                <>
                    <p className="text-center mt-3">Données en cours de chargement</p>
                </>
            )}
        </>

    )
}

export default SearchResultPage;