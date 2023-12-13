import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FourLastCocktails = () => {
    const [fourLastCocktails, setFourLastCocktails] = useState();

    useEffect(() => {
        (async () => {
            const fourLastCocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const fourLastCocktailsResponseData = await fourLastCocktailsResponse.json();
            const fourLastCocktailsFinalData = await fourLastCocktailsResponseData.drinks.slice(-4);

            setFourLastCocktails(await fourLastCocktailsFinalData);
        })();
    }, [])

    //console.log(fourLastCocktails);

    return (
        <>
            {fourLastCocktails ? (
                <>
                    <Link to='/cocktails' className="link-to">
                        <h2 className="text-center mb-3">Les 4 derniers cocktails :</h2>
                    </Link>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {fourLastCocktails.map((cocktail) => {
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

export default FourLastCocktails