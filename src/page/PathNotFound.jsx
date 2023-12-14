import { Link } from "react-router-dom";

const PathNotFound = () => {
    return (
        <>
            <div class="d-flex align-items-center justify-content-center vh-100 url-not-found">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3"> <span class="text-danger">Dommage !</span> Page non trouvée</p>
                    <p class="lead">
                        La page que vous cherchez n'existe pas
                    </p>
                    <Link className="btn btn-primary" to='/'>Retour à la page d'accueil</Link>
                </div>
            </div>
        </>
    )
}

export default PathNotFound;