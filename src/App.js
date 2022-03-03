import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";
import { FilterModal } from "./Components/FilterModal";

function App() {
  return (
    <>
      <GlobalStyle/>
      <FilterModal/>
      {/* 
        <Home/> 
        <SignIn/>
        <SearchPage/>
        <ExploreProducts/>
      */}
    </>
  )
}

export default App;
