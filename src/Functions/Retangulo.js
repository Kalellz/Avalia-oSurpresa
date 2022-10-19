export default function CalcularRetangulo(base, altura, char) {
    let mat = [];
    let arr = [];
    if (char == "Circulo") {
        for (let i = 0; i < base; i++) {
            arr[i] = "◉";
            for (let j = 0; j < altura; j++) {
                mat[j] = arr
            }
        }
    }
    else if (char == "Quadrado") {
        for (let i = 0; i < base; i++) {
            arr[i] = "▢";
            for (let j = 0; j < altura; j++) {
                mat[j] = arr
            }
        }
    }
    else {
        for (let i = 0; i < base; i++) {
            arr[i] = "*";
            for (let j = 0; j < altura; j++) {
                mat[j] = arr
            }
        }
    }
    return mat;
}