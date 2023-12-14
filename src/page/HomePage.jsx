import { useEffect, useState } from "react"
import { CocktailContext } from '../context/CocktailContext.jsx'
import FourLastCocktails from "../component/FourLastCocktails"
import Header from "../component/Header"
import RandomCategory from "../component/RandomCategory"
import DataLoading from "../component/DataLoading.jsx"
import Footer from "../component/Footer.jsx"
import FixedFooter from "../component/FixedFooter.jsx"

const HomePage = () => {

    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        (async () => {
            // récupération de 25 cocktails depuis l'API
            const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(await cocktailsResponseData.drinks);
        })();
    }, [])


    return (
        <>
            <Header />
            {cocktails ? (
                <>
                    <CocktailContext.Provider value={cocktails}>
                        <FourLastCocktails />
                    </CocktailContext.Provider>
                </>
            ) : (
                <>
                    <DataLoading />
                </>
            )}
            <RandomCategory />
            <FixedFooter />
        </>
    )
}

export default HomePage