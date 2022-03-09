import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";
import { FilterModal } from "./Components/FilterModal";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<GlobalStyle />
			{/* 
        <SignIn/>
        <Home />
        <SearchPage/>
        <Profile/>
        <ExploreProducts/>
        <FilterModal/>
        <Product/>
        <Cart/>
      */}

			<BrowserRouter>
				<Routes>
					<Route element={<SignIn />} path="/" />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
