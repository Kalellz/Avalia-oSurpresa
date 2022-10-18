import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularRetangulo from "../../Functions/Retangulo";
function App() {
	const [base, setBase] = useState();
    const [altura, setAltura] = useState();
	const [resultado, setResultado] = useState([]);
	return (
		<main>
			<h1>Desenhar um retangulo</h1>

			<section className="VA-Content">
				<label>
					base <input type="number" class="form-control" value={base} onChange={(e) => {setBase(e.target.value)}}/>
				</label>
                <label>
					altura <input type="number" class="form-control" value={altura} onChange={(e) => {setAltura(e.target.value)}}/>
				</label>
				<button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularRetangulo(base, altura))}>
					Verificar
				</button>
			</section>

			<h1> {resultado.map((item) => <h1>{item}</h1>)} </h1>
		</main>
	);
}
export default App;
