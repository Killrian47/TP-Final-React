import FourLastCocktails from "../component/FourLastCocktails"
import Header from "../component/Header"
import RandomCategory from "../component/RandomCategory"

const HomePage = () => {

    return (
        <>
            <Header />
            <h2>Home</h2>

            <FourLastCocktails />
            <RandomCategory />
        </>

    )
}

export default HomePage