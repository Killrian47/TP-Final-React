import { useContext } from "react";
import { Link } from "react-router-dom";
import CocktailCard from "./CocktailCard";
import { CocktailContext } from "../context/CocktailContext";

const FourLastCocktails = () => {
    const cocktails = useContext(CocktailContext);
    const lastCocktails = cocktails.slice(-4)

    return (
        <>
            {lastCocktails && (
                <>
                    <h2 className="text-center mb-3">Les 4 derniers <Link to='/cocktails' className="link-to">cocktails</Link> :
                    </h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 ">
                        {lastCocktails.map((cocktail) => {
                            return (
                                <CocktailCard cocktail={cocktail} />
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default FourLastCocktails