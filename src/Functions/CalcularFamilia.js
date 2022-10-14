export default function CalcularFamilia(ganhos, gastos){
    let porcentagemGastos = gastos/ganhos*100;
    let msg = ""
    if (gastos > ganhos){
        msg = "Orçamento comprometido! Hora de rever seus gastos!"
    }
    else if(porcentagemGastos >= 81 && porcentagemGastos <= 100){
        msg = "Cuidado, seu orçamento pode ficar comprometido"
    }
    else if(porcentagemGastos >= 51 && porcentagemGastos <= 80){
        msg = "Atenção, melhor conter seus gastos!"
    }
    else if(porcentagemGastos >= 21 && porcentagemGastos <= 50){
        msg = "Muito bem, seus gastos não ultrapassam metade dos ganhos!"
    }
    else if(porcentagemGastos >= 0 && porcentagemGastos <= 20){
        msg = "Parabéns, está gerenciando bem seu orçamento!"
    }
    else msg = "Erro"
    return msg;
}