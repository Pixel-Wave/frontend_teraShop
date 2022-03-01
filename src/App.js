import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";

function App() {
  return (
    <>
      <GlobalStyle/>
      <ExploreProducts/>
      {/* 
      <Home/> 
      <SignIn/>
      <SearchPage/>
      */}
    </>
  )
}

export default App;
