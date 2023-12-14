import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {

    return (
        <div className="col-12 d-flex justify-content-beetween">
            <div className="col-6">
                <img src="/logo_appli.png" alt="logo application" width={150} height={125} className="ms-3" />
            </div>
            <div className="col-6">
                <div>
                    <SearchBar />
                </div>
                <div className="d-flex gap-2">
                    <Link to='/'>Home</Link>
                    <Link to='/cocktails'>Cocktails</Link>
                    <Link to='/categories'>Categories</Link>
                    <Link to='/glasses'>Glasses</Link>
                    <Link to='/ingredients'>Ingredients</Link>


                </div>
            </div>
        </div>
    )
}

export default Header;