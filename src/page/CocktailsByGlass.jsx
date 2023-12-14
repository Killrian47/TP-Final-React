import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailCard";
import DataLoading from "../component/DataLoading";
import Footer from "../component/Footer";

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

    return (
        <>
            <Header />
            {cocktailsByGlass ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Les cocktails pouvant être servi dans un {name}</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 mb-3">
                        {cocktailsByGlass.map((cocktail) => {
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

export default CocktailsByGlass;