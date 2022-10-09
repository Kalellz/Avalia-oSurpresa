import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CalcularAcai from '../../Functions/CalcularAcai'

function App() {
  
  const [pequeno, setPequeno] = useState()
  const [medio, setMedio] = useState()
  const [grande, setGrande] = useState()
  const [desconto, setDesconto] = useState()
  const [resultado, setResultado] = useState()

  return (
    <main>
      <h1>Calcular Preço Açai</h1>
      <section className='VA-Content'>
        <input type="number" class="form-control" placeholder="Pequeno" value={pequeno} onChange={(e) => setPequeno(e.target.value)} />
        <input type="number" class="form-control" placeholder="Medio" value={medio} onChange={(e) => setMedio(e.target.value)}/>
        <input type="number" class="form-control" placeholder="Grande" value={grande} onChange={(e) => setGrande(e.target.value)}/>
        <input type="number" class="form-control" placeholder="Desconto" value={desconto} onChange={(e) => setDesconto(e.target.value)}/>
        <button type="button" class="btn btn-primary" onClick={() => setResultado(CalcularAcai(pequeno, medio, grande, desconto))}>Calcular</button>
      </section>
      <h1>{resultado}</h1>
    </main>
  );
}
export default App;
