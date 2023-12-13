import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        (async () => {
            // récupération des catégories avec l'API
            const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            const categoriesResponseData = await categoriesResponse.json();

            setCategories(categoriesResponseData.drinks);
        })();
    }, [])

    return (
        <>
            <Header />
            {categories ? (
                <>
                    <h2 className="text-center mb-3 mt-5">Toutes les catéogories</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3">
                        {categories.map((categorie) => {
                            // encodage du nom de la catégorie pour ne pas avoir un mauvais lien
                            let categoryNameCategoryEncodeUtf8 = encodeURIComponent(categorie.strCategory, "UTF-8")
                            return (
                                <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-5">
                                    <h4>Nom : {categorie.strCategory}</h4>
                                    <Link to={`/cocktails-by-categories/${categoryNameCategoryEncodeUtf8}`} className="link-to">
                                        <p>Voir plus de cocktails de cette catégorie</p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <p>Données en cours de chargement</p>
            )}
        </>
    )
}

export default CategoriesPage;