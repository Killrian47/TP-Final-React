import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";

const CocktailsPage = () => {
    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        (async () => {
            // récupération de 25 cocktails depuis l'API
            const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(await cocktailsResponseData.drinks);
        })();
    }, [])

    return (
        <>
            <Header />
            {cocktails ? (
                <>
                    <h2 className="text-center mb-3">Liste des cocktails</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 mb-2">
                        {cocktails.map((cocktail) => {
                            return (
                                <CocktailCard cocktail={cocktail} />
                            )
                        })}
                    </div>
                </>
            ) : (
                <p>Données en cours de chargement</p>
            )}
        </>
    )

}

export default CocktailsPage