import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import jurosCompostos from "../../Functions/JurosCompostos.js";
function App() {
    const [capital, setCapital] = useState();
    const [entrada, setEntrada] = useState();
    const [taxa, setTaxa] = useState();
    const [tempo, setTempo] = useState();
    const [resultado, setResultado] = useState([]);
    console.log(resultado)
    return (
        <main>
            <h1>Juros Compostos</h1>
            <section className="VA-Content">
                <label>
                    Capital <input type="number" class="form-control" value={capital} onChange={(e) => setCapital(Number(e.target.value))} />
                </label>
                <label>
                    Entrada <input type="number" class="form-control" value={entrada} onChange={(e) => setEntrada(Number(e.target.value))} />
                </label>
                <label>
                    Taxa <input type="number" class="form-control" value={taxa} onChange={(e) => setTaxa(Number(e.target.value))} />
                </label>
                <label>
                    Tempo <input type="number" class="form-control" value={tempo} onChange={(e) => setTempo(e.target.value)} />
                </label>
                <button type="button" class="btn btn-primary" onClick={() => { setResultado(jurosCompostos(Number(capital), Number(entrada), Number(taxa), Number(tempo))) }}>
                    Verificar
                </button>
            </section>
            <h1> Montante: {resultado.montante.toFixed(2)} </h1>
            <h1> Juros: {resultado.juros.toFixed(2)} </h1>
            <h1> Parcela: {resultado.parcela.toFixed(2)} </h1>
        </main>
    );
}
export default App;
