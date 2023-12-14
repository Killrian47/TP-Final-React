import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CocktailCard from "./CocktailCard";

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

                    <h2 className="text-center mb-3">Les 4 derniers <Link to='/cocktails' className="link-to">cocktails</Link> :
                    </h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 ">
                        {fourLastCocktails.map((cocktail) => {
                            return (
                                <CocktailCard cocktail={cocktail} />
                            )
                        })}
                    </div>
                </>

            ) : (
                <h2 className="text-center mt-5">Données en cours de chargement</h2>
            )
            }
        </>
    )
}

export default FourLastCocktails