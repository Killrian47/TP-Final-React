import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="col-12 d-flex justify-content-beetween">
            <div className="col-6">
                <img src="" alt="logo application" />
            </div>
            <div className="col-6">
                <div>
                    <input type="text" />
                    <input type="submit" />
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