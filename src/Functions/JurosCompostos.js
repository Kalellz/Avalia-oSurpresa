export default function jurosCompostos(capital, entrada, taxa, tempo){
   let newCapital = capital - entrada;
   let montante = newCapital * ((1 + (taxa / 100)) ** tempo);
   let juros = montante - newCapital
   const valorFinal = juros / (tempo * 12);
   let arr = {
    montante: Number(montante),
    juros: Number(juros),
    parcela: Number(valorFinal)
   }
   
   return arr
}
