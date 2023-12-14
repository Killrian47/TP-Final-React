import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {

    return (
        <div className="col-12 d-flex justify-content-beetween flex-column align-items-center flex-lg-row mb-3">
            <div className="col-lg-4">
                <img src="/logo_appli.png" alt="logo application" width={150} height={125} className="ms-3" />
            </div>
            <div className="col-12 col-lg-8 d-flex flex-column justify-content-around flex-lg-row">
                <div className="col-lg-6 d-flex justify-content-center align-items-center mb-2">
                    <SearchBar />
                </div>
                <div className="d-flex gap-1 col-lg-6 flex-wrap justify-content-center align-items-center">
                    <Link to='/' className="btn link-header">Home</Link>
                    <Link to='/cocktails' className="btn link-header">Cocktails</Link>
                    <Link to='/categories' className="btn link-header">Categories</Link>
                    <Link to='/glasses' className="btn link-header">Glasses</Link>
                    <Link to='/ingredients' className="btn link-header">Ingredients</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;