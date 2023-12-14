import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";
import DataLoading from "../component/DataLoading";
import Footer from "../component/Footer";

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

    return (
        <>
            <Header />
            {cocktailsByIngredient ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Les cocktails ayant du {name} dedans</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 mb-3">
                        {cocktailsByIngredient.map((cocktail) => {
                            return (
                                <CocktailCard cocktail={cocktail} />
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <DataLoading />
                </>
            )}
            <Footer />
        </>
    )
}

export default CocktailsByIngredient;