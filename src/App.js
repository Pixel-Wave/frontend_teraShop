import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";
import { FilterModal } from "./Components/FilterModal";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Cart/>
      {/* 
        <Home/> 
        <SignIn/>
        <SearchPage/>
        <ExploreProducts/>
        <FilterModal/>
        <Product/>
      */}
    </>
  )
}

export default App;
