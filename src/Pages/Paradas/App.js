import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CalcularParadas from '../../Functions/CalcularParadas.js';

export default function App() {
    const [tanque, setTanque] = useState(0)
    const [consumo, setConsumo] = useState(0)
    const [distancia, setDistancia] = useState(0)
    const [resultado, setResultado] = useState()
    return (
        <main>
            <h1>Quantas paradas são necessárias?</h1>

            <section className='VA-Content'>
                <label> Capacidade do Tanque em litros<input type="number" class="form-control"  value={tanque} onChange={(e) => setTanque(e.target.value)} /> </label>
                <label> Consumo km por litro<input type="number" class="form-control"  value={consumo} onChange={(e) => setConsumo(e.target.value)} /> </label>
                <label>Distância em Km<input type="number" class="form-control"  value={distancia} onChange={(e) => setDistancia(e.target.value)} /> </label>
                <button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularParadas(tanque, consumo, distancia))}>Calcular</button>
            </section>

            <h1> {resultado} </h1>
        </main>
    );
}

