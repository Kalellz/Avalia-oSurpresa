import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import CalcularAcai from "../../Functions/CalcularAcai";
import toast, { Toaster } from "react-hot-toast";
function App() {
	const [pequeno, setPequeno] = useState();
	const [medio, setMedio] = useState();
	const [grande, setGrande] = useState();
	const [desconto, setDesconto] = useState();
	const [resultado, setResultado] = useState();

	useEffect(() => {
		const message = "O valor não pode ser menor que 0."
		if (pequeno < 0) {
			toast.dismiss();
			toast.error(message);
			setPequeno(0);
		}
		if (medio < 0) {
			toast.dismiss();
			toast.error(message);
			setMedio(0);
		}
		if (grande < 0) {
			toast.dismiss();
			toast.error(message);
			setGrande(0);
		}
		if (desconto < 0) {
			toast.dismiss();
			toast.error(message);
			setDesconto(0);
		}
	}, [pequeno, medio, grande, desconto]);
	return (
		<main>
			<Toaster />
			<h1>Calcular Preço Açai</h1>
			<section>
				<input
					type="number"
					class="form-control"
					placeholder="Pequeno"
					value={pequeno}
					onChange={(e) => {
						setPequeno(e.target.value);
					}}
				/>
				<input type="number" class="form-control" placeholder="Medio" value={medio} onChange={(e) => setMedio(e.target.value)} />
				<input type="number" class="form-control" placeholder="Grande" value={grande} onChange={(e) => setGrande(e.target.value)} />
				<input type="number" class="form-control" placeholder="Desconto" value={desconto} onChange={(e) => setDesconto(e.target.value)} />
				<button type="button" class="btn btn-primary" onClick={() => {
					toast.dismiss();
					toast.success("Resultado calculado com sucesso!")
					setResultado(CalcularAcai(pequeno, medio, grande, desconto))
				}}>
					Calcular
				</button>
			</section>
			<h1>{resultado}</h1>
		</main>
	);
}
export default App;
