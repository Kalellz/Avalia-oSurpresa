import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularFamilia from "../../Functions/CalcularFamilia";
function App() {
	const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();
	const [resultado, setResultado] = useState();
	return (
		<main>
			<h1>Qual a situação da sua familia?</h1>

			<section className="VA-Content">
				<label>
					Ganhos <input type="number" class="form-control" value={ganhos} onChange={(e) => {setGanhos(e.target.value)}}/>
				</label>
                <label>
					Gastos <input type="number" class="form-control" value={gastos} onChange={(e) => {setGastos(e.target.value)}}/>
				</label>
				<button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularFamilia(ganhos, gastos))}>
					Verificar
				</button>
			</section>

			<h1> {resultado} </h1>
		</main>
	);
}
export default App;
