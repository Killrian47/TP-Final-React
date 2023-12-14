import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import DataLoading from "../component/DataLoading";
import Footer from "../component/Footer";

const GlassesPage = () => {
    const [glasses, setGlasses] = useState();

    useEffect(() => {
        (async () => {
            // récupération des verres depuis l'API
            const glassesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
            const glassesResponseData = await glassesResponse.json();

            setGlasses(await glassesResponseData.drinks);
        })();
    }, [])

    return (
        <>
            <Header />
            {glasses ? (
                <>
                    <h2 className="text-center mb-3">Liste des verres</h2>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 mb-3">
                        {glasses.map((glass) => {
                            return (
                                <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-11 col-sm-5 col-lg-3 col-xl-2 pt-2">
                                    <h4 className="text-center">{glass.strGlass}</h4>
                                    <Link to={`/cocktails-by-glasses/${glass.strGlass}`} className="link-to">
                                        <p className="text-center">Voir des cocktails avec ce verre</p>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <DataLoading />
                </>
            )}
            <Footer />
        </>
    )
}

export default GlassesPage;