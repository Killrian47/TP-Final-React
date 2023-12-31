import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataLoading from "./DataLoading";

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

    return (
        <>
            {category ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Une <Link className="link-to" to='/categories'>catégorie</Link> aléatoire : </h2>

                    <h4 className="text-center">La voici : <Link className="link-to" to={`/cocktails-by-categories/${nameEncodeUtf8}`}>{category.strCategory}</Link></h4>
                </>
            ) : (
                <>
                    <DataLoading />
                </>
            )
            }
        </>
    )
}

export default RandomCategory;