function CalcularAcai(Pequeno, Medio, Grande, Desconto){
        if(Desconto == 0){
          const Total = [(Pequeno*13.50) + (Medio*15) + (Grande*17.50)];
          return Total
        } else if(Desconto == 100){
          const Total = 0;
          return Total
        } else{
        const Total = [(Pequeno*13.50) + (Medio*15) + (Grande*17.50)]/100*Desconto;
        return Total
        }
} export default CalcularAcai;