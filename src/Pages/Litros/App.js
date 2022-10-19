import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularLitros from "../../Functions/CalcularLitros";
function App() {
	const [estudantes, setEstudantes] = useState();
    const [minLitros, setMinLitros] = useState();
    const [mililitros, setMililitros] = useState();
	const [resultado, setResultado] = useState([]);
	return (
		<main>
			<h1>Calcular quantidade de café</h1>

			<section className="VA-Content">
				<label>
					Estudantes <input type="number" class="form-control" value={estudantes} onChange={(e) => {setEstudantes(e.target.value)}}/>
                </label>
                <label>
					Litragem mínima por vez <input type="number" class="form-control" value={minLitros} onChange={(e) => {setMinLitros(e.target.value)}}/>
                </label>
                <label>
					Mililitros consumidos pelos alunos <input type="number" class="form-control" value={mililitros} onChange={(e) => {setMililitros(e.target.value)}}/>
				</label>
				<button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularLitros(Number(estudantes), Number(minLitros), Number(mililitros)))}>
					Verificar
				</button>
			</section>

			<div className="d-flex"><h3>{resultado}</h3></div>
		</main>
	);
}
export default App;
