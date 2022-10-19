export default function CalcularRetangulo(base, altura){
    let mat = [];
    let arr = [];
    for (let i = 0; i < base; i++) {
        arr[i] = "*";
        for (let j = 0; j < altura; j++) {
            mat[j] = arr
        }
    }
    return mat;
}