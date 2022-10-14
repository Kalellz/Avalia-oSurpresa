import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularIngresso from "../../Functions/CalcularIngresso";
function App() {
    const [inteiras, setInteiras] = useState();
    const [meias, setMeias] = useState();
    const [diaSemana, setDiaSemana] = useState("");
    const [nacional, setNacional] = useState(true);
    const [resultado, setResultado] = useState();
    return (
        <main>
            <h1>Ingressos Do Cinema</h1>

            <section className="VA-Content">
                <label>
                    Inteiras <input type="number" class="form-control" value={inteiras} onChange={(e) => setInteiras(Number(e.target.value))} />
                </label>
                <label>
                    Meias <input type="number" class="form-control" value={meias} onChange={(e) => setMeias(Number(e.target.value))} />
                </label>
                <label>
                    Dia da Semana <input type="text" class="form-control" value={diaSemana} onChange={(e) => setDiaSemana(e.target.value)} />
                </label>
                <label>
                    Nacional <input type="checkbox" class="form-check-input" checked={nacional} onChange={(e) => setNacional(e.target.checked)} />
                </label>
                <button type="button" class="btn btn-primary" onClick={() => {setResultado(CalcularIngresso(inteiras, meias, diaSemana, nacional))}}>
                    Verificar
                </button>
            </section>
            <h1> {resultado} </h1>
        </main>
    );
}
export default App;
