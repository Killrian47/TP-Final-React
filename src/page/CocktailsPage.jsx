import { useEffect, useState } from "react";
import Header from "../component/Header";
import VerificationCocktailsData from "../component/VerificationCocktailsData";

const CocktailsPage = () => {
    const [cocktails, setCocktails] = useState();

    useEffect(() => {
        (async () => {
            // récupération de 25 cocktails depuis l'API
            const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(await cocktailsResponseData.drinks);
        })();
    }, [])

    const props = {
        data: cocktails,
        str: 'Liste des cocktails'
    }

    return (
        <>
            <Header />
            <VerificationCocktailsData props={props} />
        </>
    )

}

export default CocktailsPage