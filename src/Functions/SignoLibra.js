function SignoLibra(mes, dia) {
    if (mes != 'OUTUBRO' && mes != 'SETEMBRO') {
        return 'Não'
    } 
    else if (mes === 'SETEMBRO' && dia >= 23 && dia <= 30) return 'Sim'
    else if (mes === 'OUTUBRO' && dia <= 22 && dia >= 1) return 'Sim'
    else return 'Não'

} 
export default SignoLibra;