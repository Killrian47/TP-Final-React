import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";

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
                    <h2 className="text-center mb-3">Les cocktails ayant pour catégorie : {name}</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 mb-3">
                        {cocktailsByCategory.map((cocktail) => {
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

export default CocktailsByCategory;