function SignoLibra(mes, dia) {
    if (mes != 'Outubro' && mes != 'Setembro') {
        return 'Não'
    } else if (mes === 'Setembro' && dia > 22 && dia <= 30) return 'Sim'
    else if (mes === 'Outubro' && dia <= 22) return 'Sim'
    else return 'Não'
} export default SignoLibra;