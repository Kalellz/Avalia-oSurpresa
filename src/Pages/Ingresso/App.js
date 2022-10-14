import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CalcularIngresso from "../../Functions/CalcularIngresso";
function App() {
    const [inteiras, setInteiras] = useState();
    const [meias, setMeias] = useState();
    const [diaSemana, setDiaSemana] = useState("Selecionar Dia da Semana");
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
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {diaSemana}
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" onClick={() => { setDiaSemana("domingo") }}>Domingo</a></li>
                        <li><a class="dropdown-item" onClick={() => { setDiaSemana("segunda-feira") }}>Segunda-feira</a></li>
                        <li><a class="dropdown-item" onClick={() => { setDiaSemana("terça-feira") }}>Terça-feira</a></li>
                        <li><a class="dropdown-item" onClick={() => { setDiaSemana("quarta-feira") }}>Quarta-feira</a></li>
                        <li><a class="dropdown-item" onClick={() => { setDiaSemana("quinta-feira") }}>Quinta-feira</a></li>
                        <li><a class="dropdown-item" onClick={() => { setDiaSemana("sexta-feira") }}>Sexta-feira</a></li>
                        <li><a class="dropdown-item" onClick={() => { setDiaSemana("sabado") }}>Sábado</a></li>
                    </ul>
                </div>
                <label>
                    Nacional <input type="checkbox" class="form-check-input" checked={nacional} onChange={(e) => setNacional(e.target.checked)} />
                </label>
                <button type="button" class="btn btn-primary" onClick={() => { setResultado(CalcularIngresso(inteiras, meias, diaSemana, nacional)) }}>
                    Verificar
                </button>
            </section>
            <h1> {resultado} </h1>
        </main>
    );
}
export default App;
