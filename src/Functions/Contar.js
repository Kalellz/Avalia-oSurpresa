export default function Contar(inicio, fim){
    let resposta = [];
    let aumentador = 0;
    for(let i = inicio; i <= fim; i++ ){
        resposta[aumentador] = i;
        aumentador++;
    }
    return resposta
}