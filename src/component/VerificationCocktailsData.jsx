import CocktailCard from "./CocktailCard";
import DataLoading from "./DataLoading";

const VerificationCocktailsData = ({ props }) => {
    return (
        <>
            {props.data ? (
                <>
                    <h3 className="text-center mt-3 mb-3">{props.str}</h3>
                    <div className="d-flex flex-wrap col-12 justify-content-center gap-3 mb-3">
                        {props.data.map((cocktail) => {
                            return (
                                <CocktailCard cocktail={cocktail} />
                            );
                        })}
                    </div>
                </>
            ) : (
                <>
                    <DataLoading />
                </>
            )}
        </>
    )
}

export default VerificationCocktailsData;