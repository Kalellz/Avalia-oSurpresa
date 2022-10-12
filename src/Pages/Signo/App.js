import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SignoLibra from "../../Functions/SignoLibra";

function App() {
	const [dia, setDia] = useState();
	const [mes, setMes] = useState();
	const [resultado, setResultado] = useState();
	return (
		<main>
			<h1>Você é de Libra?</h1>
			<section className="VA-Content">
				<input type="number" class="form-control" placeholder="Dia" value={dia} onChange={(e) => setDia(e.target.value)} />
				<input type="text" class="form-control" placeholder="Mes" value={mes} onChange={(e) => setMes(e.target.value)} />
				<button type="button" class="btn btn-primary" onClick={() => setResultado(SignoLibra(mes.toUpperCase(), dia))}>
					Verificar
				</button>
			</section>
			<h1>{resultado}</h1>
		</main>
	);
}
export default App;
