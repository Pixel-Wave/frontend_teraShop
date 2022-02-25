import {GlobalStyle} from "./styles/global"
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <>
      <GlobalStyle/>
      <SignIn/>
      {/* 
      <Home/> 
      */}
    </>
  )
}

export default App;
