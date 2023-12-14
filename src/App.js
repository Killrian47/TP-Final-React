import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/HomePage.jsx'
import CocktailsPage from "./page/CocktailsPage.jsx";
import CocktailsDetail from "./page/CocktailDetail.jsx";
import CategoriesPage from "./page/CategoriesPage.jsx";
import CocktailsByCategory from "./page/CocktailsByCategory.jsx";
import SearchResultPage from "./page/SearchResultPage.jsx";
import PathNotFound from "./page/PathNotFound.jsx";
import GlassesPage from "./page/GlassesPage.jsx";
import CocktailsByGlass from "./page/CocktailsByGlass.jsx";
import IngredientsPage from "./page/IngredientsPage.jsx";
import CocktailsByIngredient from "./page/CocktailsByIngredient.jsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cocktails" element={<CocktailsPage />}/>
        <Route path="/cocktail/detail/:id" element={<CocktailsDetail />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cocktails-by-categories/:name" element={<CocktailsByCategory />} />
        <Route path="/glasses" element={<GlassesPage />} />
        <Route path="/cocktails-by-glasses/:name" element={<CocktailsByGlass />} />
        <Route path="/search-result" element={<SearchResultPage />} />
        <Route path="/ingredients" element={<IngredientsPage /> } />
        <Route path="/cocktails-by-ingredient/:name" element={<CocktailsByIngredient /> } />
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
