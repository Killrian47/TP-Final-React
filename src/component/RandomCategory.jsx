import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomCategory = () => {
    const [category, setCategory] = useState();
    const [nameEncodeUtf8, setNameEncodeUtf8] = useState();

    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            const categoriesResponseData = await categoriesResponse.json();
            const randomCategory = await categoriesResponseData.drinks[(Math.floor(Math.random() * categoriesResponseData.drinks.length))]

            setNameEncodeUtf8(encodeURIComponent(await randomCategory.strCategory, "UTF-8"));
            setCategory(randomCategory);
        })();
    }, [])

    //console.log(nameEncodeUtf8);

    return (
        <>
            {category ? (
                <>
                    <Link to='/categories'>
                        <h2 className="text-center mb-3 mt-5">Une catégorie aléatoire : </h2>
                    </Link>
                    <Link to={`/cocktails-by-categories/${nameEncodeUtf8}`}>
                        <h4 className="text-center">La voici : {category.strCategory}</h4>

                    </Link>
                </>
            ) : (
                <p>Données en cours de chargement</p>
            )}
        </>
    )
}

export default RandomCategory;