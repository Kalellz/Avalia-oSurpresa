import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {CalcularMedia, CalcularMaior, CalcularMenor } from '../../Functions/CalcularAluno.js'
function App() {

    const [quantAlunos, setQuantAlunos] = useState();
    const [Alunos, setAlunos] = useState([]);
    const [notas, setNotas] = useState([]);
    const [media, setMedia] = useState()
    const [maior, setMaior] = useState()
    const [menor, setMenor] = useState()
    let notasfinais = []


    function setarInputs() {
        let array = []
        for (let i = 0; i < quantAlunos; i++) {
            array[i] = i
        }
        setAlunos(array)
    }

    console.log(notas)
    return (
        <main>
            <h1>Calcular Informações De Alunos</h1>
            <section className="VA-Content">
                <label>
                    Quantidade De Alunos <input type="number" class="form-control" value={quantAlunos} onChange={(e) => { setQuantAlunos(e.target.value) }} />
                </label>
                <button onClick={setarInputs}>Confirmar</button>
                {Alunos.map((item, index) =>
                    <div>
                        <input value={notas[index]} onChange={e => notasfinais.push(Number(e.target.value))} type="number"/>
                    </div>
                )}
                <button type="button" class="btn btn-primary" onClick={() => {
                    setNotas(notasfinais)
                    setMedia(CalcularMedia(notas))
                    setMaior(CalcularMaior(notas))
                    setMenor(CalcularMenor(notas))
                }}>
                    Verificar
                </button>
            </section>
            <h1>media: {media}</h1>
            <h1>maior: {maior}</h1>
            <h1>menor: {menor}</h1>
        </main>
    );
}
export default App;
