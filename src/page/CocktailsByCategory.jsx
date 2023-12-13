import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";

const CocktailsByCategory = () => {
    const { name } = useParams();
    const [cocktailsByCategory, setCocktailsByCategory] = useState();


    useEffect(() => {
        (async () => {

            const cocktailsByCategoryResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + name)
            const cocktailsByCategoryResponseData = await cocktailsByCategoryResponse.json();

            setCocktailsByCategory(cocktailsByCategoryResponseData.drinks);
        })();
    }, [])

    console.log(cocktailsByCategory);

    return (
        <>
            <Header />
            {cocktailsByCategory ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Les cocktails catégorisé : {name}</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {cocktailsByCategory.map((cocktail) => {
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

export default CocktailsByCategory;