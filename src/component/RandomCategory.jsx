import { useEffect, useState } from "react";

const RandomCategory = () => {
    const [category, setCategory] = useState();

    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            const categoriesResponseData = await categoriesResponse.json();
            const randomCategory = await categoriesResponseData.drinks[(Math.floor(Math.random() * categoriesResponseData.drinks.length))]

            setCategory(randomCategory);
        })();
    }, [])

    console.log(category);

    return (
        <>
            {category ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Une catégorie aléatoire :</h2>
                    <h4 className="text-center">La voici : {category.strCategory}</h4>
                </>
            ) : (
                <p>Données en cours de chargement</p>
            )}
        </>
    )
}

export default RandomCategory;