import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/HomePage.jsx'
import CocktailsPage from "./page/CocktailsPage.jsx";
import CocktailsDetail from "./page/CocktailDetail.jsx";
import CategoriesPage from "./page/CategoriesPage.jsx";
import CocktailsByCategory from "./page/CocktailsByCategory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cocktails" element={<CocktailsPage />}/>
        <Route path="/cocktail/detail/:id" element={<CocktailsDetail />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cocktails-by-categories/:name" element={<CocktailsByCategory />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
