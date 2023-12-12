import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../component/Header";

const CocktailsDetail = () => {
    const { id } = useParams();
    const [oneCocktail, setOneCocktail] = useState();

    useEffect(() => {
        (async () => {
            const oneCocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
            const oneCocktailResponseData = await oneCocktailResponse.json();

            setOneCocktail(await oneCocktailResponseData.drinks);
        })();
    }, []);

    //console.log(test);

    return (
        <>
            <Header />
            {oneCocktail ? (
                <div className="">
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {oneCocktail.map((cocktail) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-12 col-lg-5">
                                    <h4 className="text-center">Détail du cocktail nommé : {cocktail.strDrink}</h4>
                                    <img src={cocktail.strDrinkThumb} alt={`image de ${cocktail.strDrink}`} width={350} height={350} />
                                    <p className="mt-2 w-100 ps-3"> <strong>Catégorie :</strong> {cocktail.strCategory}</p>
                                    <p className="w-100 ps-3 "><strong>Ingrédients :</strong> {cocktail.strIngredient1} {cocktail.strIngredient2} {cocktail.strIngredient3} {cocktail.strIngredient4} {cocktail.strIngredient5} {cocktail.strIngredient6} {cocktail.strIngredient7} {cocktail.strIngredient8} {cocktail.strIngredient9} {cocktail.strIngredient10} {cocktail.strIngredient11} {cocktail.strIngredient12} {cocktail.strIngredient13} {cocktail.strIngredient14} {cocktail.strIngredient15}</p>
                                    <p className="col-12 ps-3"><strong>Instruction :</strong> {cocktail.strInstructions}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <p>Données en cours de chargement</p>
            )}

        </>
    )
}

export default CocktailsDetail;