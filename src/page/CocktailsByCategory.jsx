import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";
import DataLoading from "../component/DataLoading";
import Footer from "../component/Footer";

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
                <>
                    <DataLoading />
                </>
            )}
            <Footer />
        </>
    )
}

export default CocktailsByCategory;