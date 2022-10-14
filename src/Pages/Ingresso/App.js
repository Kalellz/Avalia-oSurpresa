import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularIngresso from "../../Functions/CalcularIngresso";
function App() {
	const [temperatura, setTemperatura] = useState();
	const [resultado, setResultado] = useState();
	return (
		<main>
			<h1>Você está com febre?</h1>

			<section className="VA-Content">
				<label>
					{" "}
					Temperatura <input type="number" class="form-control" value={temperatura} onChange={(e) => setTemperatura(e.target.value)} />{" "}
				</label>
				<button type="button" class="btn btn-primary">
					Verificar
				</button>
			</section>

			<h1> {resultado} </h1>
		</main>
	);
}
export default App;
