export default function CalcularParadas(tanque, consumo, distancia) {
    if(tanque <= 0)
    return 'Capacidade do tanque inválida';

    if(consumo <= 0)
    return 'Informe o consumo do veículo';

    if(distancia <= 0)
    return 'Informe uma distância válida';
    let precisa = distancia / consumo;
    let qtdParadas = precisa / tanque;
    qtdParadas = Math.ceil(qtdParadas);

    if(qtdParadas === 1)
        return `${`Você precisará parar para abastecer ${qtdParadas} vez`}`

    let msg = `${`Você precisará parar para abastecer ${qtdParadas} vezes`}`
    return msg;
}