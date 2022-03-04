import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";
import { FilterModal } from "./Components/FilterModal";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Product/>
      {/* 
        <Home/> 
        <SignIn/>
        <SearchPage/>
        <ExploreProducts/>
        <FilterModal/>
      */}
    </>
  )
}

export default App;
