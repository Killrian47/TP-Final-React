import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../component/Header";

const CocktailsDetail = () => {
    const { id } = useParams();
    const [oneCocktail, setOneCocktail] = useState();
    const [categoryNameEncodeUtf8, setCategoryNameEncodeUtf8] = useState();
    const navigate = useNavigate();
    //let ingredients = [];

    useEffect(() => {
        (async () => {
            // récupération d'un cocktail via son id 
            const oneCocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
            const oneCocktailResponseData = await oneCocktailResponse.json();
            let getCategoryFromTheCocktailResponse = null;

            if (oneCocktailResponseData.drinks === null) {
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


    /*if (oneCocktail !== undefined) {
        oneCocktail.map((cocktail) => {
            for (let index = 1; index < 16; index++) {
                const transformIndexInString = index.toString();
                let ingredientsFromCocktail = cocktail.strIngredient + transformIndexInString;
                ingredients.push(ingredientsFromCocktail)

            }
        })
    }
    console.log(ingredients);*/

    return (
        <>
            <Header />
            {oneCocktail ? (
                <div className="">
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {oneCocktail.map((cocktail) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-12 col-lg-5 p-2 mb-5">
                                    <h4 className="text-center">Détail du cocktail nommé : {cocktail.strDrink}</h4>
                                    <img src={cocktail.strDrinkThumb} alt={`image de ${cocktail.strDrink}`} width={300} height={300} />
                                    <p className="mt-2 w-100 ps-3"> <strong>Catégorie :</strong> {cocktail.strCategory} <Link className="link-to" to={`/cocktails-by-categories/${categoryNameEncodeUtf8}`}>Voir plus de cocktails de cette categorie</Link></p>
                                    <p className="col-12 ps-3"><strong>Instruction :</strong> {cocktail.strInstructions}</p>
                                    <p className="col-12 ps-3"><strong>Date de modification : </strong> {cocktail.dateModified}</p>
                                    <div className="d-flex flex-wrap flex-column align-items-center mb-2">
                                        <p className="w-100 ps-3 "><strong>Ingrédients : </strong></p>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient1}`}>{cocktail.strIngredient1}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient2}`}>{cocktail.strIngredient2}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient3}`}>{cocktail.strIngredient3}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient4}`}>{cocktail.strIngredient4}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient5}`}>{cocktail.strIngredient5}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient6}`}>{cocktail.strIngredient6}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient7}`}>{cocktail.strIngredient7}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient8}`}>{cocktail.strIngredient8}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient9}`}>{cocktail.strIngredient9}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient10}`}>{cocktail.strIngredient10}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient11}`}>{cocktail.strIngredient11}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient12}`}>{cocktail.strIngredient12}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient13}`}>{cocktail.strIngredient13}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient14}`}>{cocktail.strIngredient14}</Link>
                                        <Link className="link-to" to={`/cocktails-by-ingredient/${cocktail.strIngredient15}`}>{cocktail.strIngredient15}</Link>
                                    </div>

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