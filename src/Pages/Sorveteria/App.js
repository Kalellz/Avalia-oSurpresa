import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [gramas, setGramas] = useState()
    const [resultado, setResultado] = useState()
    function CalcularSorvete(gramas){
        if(gramas <= 0) return 'Peso Inválido'
        const preco = gramas * 0.035;
        if(gramas >= 1000){
            const preco = (gramas * 0.035) - 5;
            return preco
        }
        else return preco.toFixed(2)
    }
    return (
        <main>
        <h1>Calcular Preço Sorvete</h1>
        <section className='VA-Content'>
            <input  type="number"  class="form-control" placeholder="Gramas" value={gramas} onChange={(e) => setGramas(e.target.value)}/>
            <button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularSorvete(gramas))}>Calcular</button>
        </section>
        <h1>{resultado}</h1>
    </main>
    );
}
export default App;
