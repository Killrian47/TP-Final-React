import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";

const CocktailsPage = () => {
    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(await cocktailsResponseData.drinks);
        })();
    }, [])

    console.log(cocktails);

    return (
        <>
            <Header />
            {cocktails ? (
                <>
                    <h2 className="text-center mb-3">Liste des cocktails</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {cocktails.map((cocktail) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-12 col-lg-5">
                                    <h4>Nom : {cocktail.strDrink}</h4>
                                    <img className="mb-3" src={cocktail.strDrinkThumb} alt={`image du cocktail : ${cocktail.strDrink}`} width={300} height={300} />
                                    <Link to={`/cocktail/detail/${cocktail.idDrink}`} className="link-to">
                                        <p>Voir plus de détails</p>
                                    </Link>
                                </div>
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