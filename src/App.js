import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";
import { FilterModal } from "./Components/FilterModal";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Profile/>
      {/* 
        <Home/> 
        <SignIn/>
        <SearchPage/>
        <ExploreProducts/>
        <FilterModal/>
        <Product/>
        <Cart/>
      */}
    </>
  )
}

export default App;
