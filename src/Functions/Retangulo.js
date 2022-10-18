function CalcularRetangulo(base, altura){
    for(linha=1; linha <= altura; linha++){
        for(coluna=1;coluna <= base;coluna++){
            process.stdout.write("*");
        }
        console.log()
    }

}
console.log(CalcularRetangulo(5, 2))