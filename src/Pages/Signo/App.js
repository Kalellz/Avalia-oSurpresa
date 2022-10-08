import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [dia, setDia] = useState()
    const [mes, setMes] = useState()
    const [resultado, setResultado] = useState()
    
    function SignoLibra(mes, dia){
        if (mes != 'Outubro' && mes != 'Setembro'){
            return 'Não'
    }   else if(mes === 'Setembro' && dia > 22 && dia <= 30) return 'Sim'
        else if(mes === 'Outubro' && dia <= 22) return 'Sim'
        else return 'Não'
    }
    return (
        <main>
        <h1>Você é de Libra?</h1>
        <section className='VA-Content'>
            <input type="number"  class="form-control" placeholder="Dia" value={dia} onChange={(e) => setDia(e.target.value)} />
            <input type="text"    class="form-control" placeholder="Mes" value={mes} onChange={(e) => setMes(e.target.value)}/>
            <button type="button" class="btn btn-primary" onClick={() => setResultado(SignoLibra(mes, dia))}>Verificar</button>
        </section>
        <h1>{resultado}</h1>
    </main>
    );
}
export default App;
