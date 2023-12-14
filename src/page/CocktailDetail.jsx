import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../component/Header";
import DataLoading from "../component/DataLoading";

const CocktailsDetail = () => {
    const { id } = useParams();
    const [oneCocktail, setOneCocktail] = useState();
    const [categoryNameEncodeUtf8, setCategoryNameEncodeUtf8] = useState();
    const navigate = useNavigate();
    let ingredients = [];

    useEffect(() => {
        (async () => {
            // récupération d'un cocktail via son id 
            const oneCocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
            const oneCocktailResponseData = await oneCocktailResponse.json();
            let getCategoryFromTheCocktailResponse = null;

            if (oneCocktailResponseData.drinks === null) {
                // redirection sur une url inexistante
                navigate('/404-not-found')
            } else {
                getCategoryFromTheCocktailResponse = await oneCocktailResponseData.drinks.map((cocktail) => {
                    // encodage du nom de la catégorie du cocktail
                    return encodeURIComponent(cocktail.strCategory, "UTF-8")
                })
            }

            setCategoryNameEncodeUtf8(await getCategoryFromTheCocktailResponse);
            setOneCocktail(await oneCocktailResponseData.drinks);
        })();
    }, []);


    if (oneCocktail !== undefined) {
        oneCocktail.map((cocktail) => {
            ingredients.push(cocktail.strIngredient1);
            ingredients.push(cocktail.strIngredient2);
            ingredients.push(cocktail.strIngredient3);
            ingredients.push(cocktail.strIngredient4);
            ingredients.push(cocktail.strIngredient5);
            ingredients.push(cocktail.strIngredient6);
            ingredients.push(cocktail.strIngredient7);
            ingredients.push(cocktail.strIngredient8);
            ingredients.push(cocktail.strIngredient9);
            ingredients.push(cocktail.strIngredient10);
            ingredients.push(cocktail.strIngredient11);
            ingredients.push(cocktail.strIngredient12);
            ingredients.push(cocktail.strIngredient13);
            ingredients.push(cocktail.strIngredient14);
            ingredients.push(cocktail.strIngredient15);
        })
    }

    return (
        <>
            <Header />
            {oneCocktail ? (
                <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                    {oneCocktail.map((cocktail) => {
                        return (
                            <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-12 col-lg-5 p-2 mb-5">
                                <h4 className="text-center">Détail du cocktail nommé : {cocktail.strDrink}</h4>
                                <img src={cocktail.strDrinkThumb} alt={`image de ${cocktail.strDrink}`} width={300} height={300} />
                                <p className="mt-2 w-100 ps-3"> <strong>Catégorie :</strong> {cocktail.strCategory} <Link className="link-to" to={`/cocktails-by-categories/${categoryNameEncodeUtf8}`}>+ de boissons de cette catégorie</Link></p>
                                <p className="col-12 ps-3"><strong>Instruction :</strong> {cocktail.strInstructions}</p>
                                <p className="col-12 ps-3"><strong>Date de modification : </strong> {cocktail.dateModified}</p>
                                <div className="d-flex flex-wrap flex-column align-items-center mb-2">
                                    <p className="w-100 ps-3 "><strong>Ingrédients : </strong></p>
                                    {ingredients.map((ingredient) => {
                                        return (
                                            <Link className="link-to" to={`/cocktails-by-ingredient/${ingredient}`}>{ingredient}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <>
                    <DataLoading />
                </>
            )}

        </>
    )
}

export default CocktailsDetail;