import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";

const CocktailsByIngredient = () => {
    const { name } = useParams();
    const [cocktailsByIngredient, setCocktailsByIngredient] = useState();

    useEffect(() => {
        (async () => {
            const cocktailsByIngredientResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name)
            const cocktailsByIngredientResponseData = await cocktailsByIngredientResponse.json();

            setCocktailsByIngredient(cocktailsByIngredientResponseData.drinks);
        })();
    }, [])

    console.log(cocktailsByIngredient);

    return (
        <>
            <Header />
            {cocktailsByIngredient ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Les cocktails pouvant être servi dans un : {name}</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {cocktailsByIngredient.map((cocktail) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-5 col-lg-2 flex-wrap">
                                    <p><strong>{cocktail.strDrink}</strong></p>
                                    <img className="mb-3" src={cocktail.strDrinkThumb} alt={`image du cocktail : ${cocktail.strDrink}`} width={100} height={100} />
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

export default CocktailsByIngredient;