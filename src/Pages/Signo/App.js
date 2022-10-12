import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SignoLibra from "../../Functions/SignoLibra";

function App() {
    const [resultado, setResultado] = useState();
    const [date, setDate] = useState();
    return (
        <main>
            <h1>Você é de Libra?</h1>
            <section className="VA-Content">
                <input type="date" class="form-control" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="button" class="btn btn-primary" onClick={() => setResultado(SignoLibra(date))}>
                    Verificar
                </button>
            </section>
            <h1>{resultado}</h1>
        </main>
    );
}
export default App;