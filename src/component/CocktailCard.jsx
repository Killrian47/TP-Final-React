import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
    return (
        <div className="cocktail-card d-flex flex-column align-items-center justify-content-center col-10 col-sm-3 col-lg-2">
            <h4 className="mt-2 text-center">{cocktail.strDrink}</h4>
            <img className="mb-3" src={cocktail.strDrinkThumb} alt={`image du cocktail : ${cocktail.strDrink}`} width={150} height={150} />
            <Link to={`/cocktail/detail/${cocktail.idDrink}`} className="link-to">
                <p>Voir plus de détails</p>
            </Link>
        </div>
    )
}

export default CocktailCard;