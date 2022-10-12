import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularSalario from "../../Functions/CalcularSalario.js";

function App() {
	const [bruto, setBruto] = useState(0);
	const [bonus, setBonus] = useState(0);
	const [desconto, setDesconto] = useState(0);
	const [resultado, setResultado] = useState();
	return (
		<main>
			<h1>Qual o seu salário líquido?</h1>

			<section className="VA-Content">
				<label>
					{" "}
					Salário Bruto <input type="number" class="form-control" value={bruto} onChange={(e) => setBruto(e.target.value)} />{" "}
				</label>
				<label>
					Bônus em % <input type="number" class="form-control" value={bonus} onChange={(e) => setBonus(e.target.value)} />{" "}
				</label>
				<label>
					Total de Descontos
					<input type="number" class="form-control" value={desconto} onChange={(e) => setDesconto(e.target.value)} />{" "}
				</label>
				<button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularSalario(bruto, bonus, desconto))}>
					Verificar
				</button>
			</section>

			<h1> {resultado} </h1>
		</main>
	);
}
export default App;
