import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SearchPage } from "./pages/SearchPage";
import { ExploreProducts } from "./pages/ExploreProducts";
import { FilterModal } from "./components/FilterModal";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<SignIn />} />
					<Route path="/register" element={<SignUp/>} />
					<Route element={<Home />} path="/home/*" />
					<Route element={<SearchPage />} path="/search/*" />
					<Route element={<ExploreProducts />} path="/explore/*" />
					<Route element={<Product />} path="/product/*" />
					<Route element={<Cart />} path="/shop/*" />
					<Route element={<Profile />} path="/profile" />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
