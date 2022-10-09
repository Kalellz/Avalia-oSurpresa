import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CalcularSorvete from '../../Functions/CalcularSorvete';

function App() {
    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState()

    return (
        <main>
            <h1>Calcular Preço Sorvete</h1>
            <section>
                <input type="number" class="form-control" placeholder="Gramas" value={gramas} onChange={(e) => setGramas(e.target.value)} />
                <button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularSorvete(gramas))}>Calcular</button>
            </section>
            <h1>{resultado}</h1>
        </main>
    );
}
export default App;
