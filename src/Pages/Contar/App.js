import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Contar from "../../Functions/Contar";
function App() {
	const [inicio, setInicio] = useState();
    const [fim, setFim] = useState();
	const [resultado, setResultado] = useState([]);
	return (
		<main>
			<h1>Contar os numeros naturais</h1>

			<section className="VA-Content">
				<label>
					inicio <input type="number" class="form-control" value={inicio} onChange={(e) => {setInicio(e.target.value)}}/>
				</label>
                <label>
					fim <input type="number" class="form-control" value={fim} onChange={(e) => {setFim(e.target.value)}}/>
				</label>
				<button type="button" class="btn btn-primary" onClick={() => setResultado(Contar(inicio, fim))}>
					Verificar
				</button>
			</section>

			<h1> {resultado.map((item) => <h1>{item}</h1>)} </h1>
		</main>
	);
}
export default App;
