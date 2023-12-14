import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const IngredientsPage = () => {
    const [ingredients, setIngredients] = useState();
    //const [ingredientsImg, setIngredientsImg] = useState();

    useEffect(() => {
        (async () => {
            // récupération des ingrédients depuis l'API
            const ingredientsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            const ingredientsResponseData = await ingredientsResponse.json();

            setIngredients(await ingredientsResponseData.drinks);
        })();
    }, [])

    return (
        <>
            <Header />
            {ingredients ? (
                <>
                    <h2 className="text-center mb-3">Liste des verres</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {ingredients.map((ingredient) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-5 col-lg-3w">
                                    <p>Nom : <strong>{ingredient.strIngredient1}</strong></p>
                                    <Link to={`/cocktails-by-ingredient/${ingredient.strIngredient1}`} className="link-to">
                                        <p>Cocktails avec cet ingrédient</p>
                                    </Link>
                                </div>
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

export default IngredientsPage;