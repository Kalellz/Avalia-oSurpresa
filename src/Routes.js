import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/App.js";
import VendaAcai from "./Pages/VendaAcai/App.js";
import Signo from "./Pages/Signo/App.js";
import Sorveteria from "./Pages/Sorveteria/App.js";
import Salario from "./Pages/Salario/App.js";
import Paradas from "./Pages/Paradas/App.js";
import Febre from "./Pages/Febre/App.js";
import Familia from "./Pages/Familia/App.js";
import Ingresso from "./Pages/Ingresso/App.js";
import Contar from "./Pages/Contar/App.js";
import Linhas from "./Pages/Linhas/App.js";
import Retangulo from "./Pages/Retangulo/App.js";
import Litros from "./Pages/Litros/App.js"

export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/VendaAcai" element={<VendaAcai />} />
				<Route path="/Signo" element={<Signo />} />
				<Route path="/Sorveteria" element={<Sorveteria />} />
				<Route path="/Salario" element={<Salario />} />
				<Route path="/Paradas" element={<Paradas />} />
				<Route path="/Febre" element={<Febre />} />
				<Route path="/Familia" element={<Familia />} />
				<Route path="/Ingresso" element={<Ingresso />} />
				<Route path="/Contar" element={<Contar />} />
				<Route path="/Linhas" element={<Linhas />} />
				<Route path="/Retangulo" element={<Retangulo />} />
				<Route path="/Litros" element={<Litros />} />
			</Routes>
		</BrowserRouter>
	);
}
