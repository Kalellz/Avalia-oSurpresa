import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SignoLibra from "../../Functions/SignoLibra";
import toast, { Toaster } from "react-hot-toast";
function App() {
    const [resultado, setResultado] = useState();
    const [date, setDate] = useState();
    return (
		<main>
			<Toaster />
            <h1>Você é de Libra?</h1>
            <section className="VA-Content">
                <input type="date" class="form-control" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} />
				<button type="button" class="btn btn-primary" onClick={() => {
					toast.loading("Calculando resultado...")
					setTimeout(() => {
						toast.dismiss();
						toast.success("Resultado Calculado!")
						setResultado(SignoLibra(date))
					}, 1500)
				}}>
                    Verificar
                </button>
            </section>
            <h1>{resultado}</h1>
        </main>
    );
}
export default App;