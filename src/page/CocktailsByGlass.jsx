import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";

const CocktailsByGlass = () => {
    const { name } = useParams();
    const [cocktailsByGlass, setCocktailsByGlass] = useState();

    useEffect(() => {
        (async () => {
            const cocktailsByGlassResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=' + name)
            const cocktailsByGlassResponseData = await cocktailsByGlassResponse.json();

            setCocktailsByGlass(cocktailsByGlassResponseData.drinks);
        })();
    }, [])

    console.log(cocktailsByGlass);

    return (
        <>
            <Header />
            {cocktailsByGlass ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Les cocktails pouvant être servi dans un : {name}</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {cocktailsByGlass.map((cocktail) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-5 col-lg-2">
                                    <p>Nom : <strong>{cocktail.strDrink}</strong></p>
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

export default CocktailsByGlass;