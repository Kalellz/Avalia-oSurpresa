import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Linhas from "../../Functions/Linhas";
function App() {
	const [qnt, setQnt] = useState();
	const [resultado, setResultado] = useState([]);
	return (
		<main>
			<h1>Exibir linhas com asteriscos</h1>

			<section className="VA-Content">
				<label>
					qnt <input type="number" class="form-control" value={qnt} onChange={(e) => {setQnt(e.target.value)}}/>
				</label>
				<button type="button" class="btn btn-primary" onClick={() => setResultado(Linhas(qnt))}>
					Verificar
				</button>
			</section>

			<div className="d-flex"> {resultado.map((item) => <h1 className="m-2">{item}</h1>)} </div>
		</main>
	);
}
export default App;
