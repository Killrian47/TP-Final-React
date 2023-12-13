import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {

    return (
        <div className="col-12 d-flex justify-content-beetween">
            <div className="col-6">
                <img src="" alt="logo application" />
            </div>
            <div className="col-6">
                <div>
                    <SearchBar />
                </div>
                <div className="d-flex gap-2">
                    <Link to='/'>Home</Link>
                    <Link to='/cocktails'>Cocktails</Link>
                    <Link to='/categories'>Categories</Link>

                </div>
            </div>
        </div>
    )
}

export default Header;