import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <SearchPage/>
      {/* 
      <Home/> 
      <SignIn/>
      */}
    </>
  )
}

export default App;
