export function CalcularMedia(notas){
    let somaNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaNotas+= notas[i]
    }
    return somaNotas / notas.length
} 
export function CalcularMaior(notas){
    let maior = 0;
    for(let i = 0; i < notas.length; i++){
        if(notas[i] > maior) maior = notas[i];
    }
    return maior
} 
export function CalcularMenor(notas){
    let menor = Infinity;
    for(let i = 0; i < notas.length; i++){
        if(notas[i] < menor) menor = notas[i];
    }
    return menor
}