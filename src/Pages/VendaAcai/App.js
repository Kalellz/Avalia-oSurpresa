import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CalcularAcai from '../../Functions/CalcularAcai'

function App() {

  const [pequeno, setPequeno] = useState(0)
  const [medio, setMedio] = useState(0)
  const [grande, setGrande] = useState(0)
  const [desconto, setDesconto] = useState(0)
  const [resultado, setResultado] = useState()

  return (
    <main>
      <h1>Calcular Preço Açai</h1>
      <section>
        <input type="number" class="form-control" placeholder="Pequeno" value={pequeno} onChange={(e) => setPequeno(e.target.value)} />
        <input type="number" class="form-control" placeholder="Medio" value={medio} onChange={(e) => setMedio(e.target.value)} />
        <input type="number" class="form-control" placeholder="Grande" value={grande} onChange={(e) => setGrande(e.target.value)} />
        <input type="number" class="form-control" placeholder="Desconto" value={desconto} onChange={(e) => setDesconto(e.target.value)} />
        <button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularAcai(pequeno, medio, grande, desconto))}>Calcular</button>
      </section>
      <h1>{resultado}</h1>
    </main>
  );
}
export default App;
