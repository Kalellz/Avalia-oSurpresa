export default function totalCompra(inteiras, meias, diaSemana, nacional) {
    let total;
    if (nacional == true) {
        total = (inteiras + meias) * 5;
    } else {
        if (diaSemana == "quarta-feira") {
            total = (inteiras + meias) * 14.25;
        } else {
            total = inteiras * 28.5 + meias * 14.25;
        }
    }
   
    return `O total a se pagar é de R$${total}`;
}