import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {CalcularMedia, CalcularMaior, CalcularMenor } from '../../Functions/CalcularAluno.js'
function App() {

    const [quantAlunos, setQuantAlunos] = useState();
    const [Alunos, setAlunos] = useState([]);
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
                        <h1 className="text-center fs-5">Aluno {item+1}</h1>
                        <input class="form-control" value={notasfinais[index]} onChange={e => {
                            notasfinais[index] = Number(e.target.value)
                        }} type="number"/>
                    </div>
                )}
                <button type="button" class="btn btn-primary" onClick={() => {
                    setMedia(CalcularMedia(notasfinais))
                    setMaior(CalcularMaior(notasfinais))
                    setMenor(CalcularMenor(notasfinais))
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
