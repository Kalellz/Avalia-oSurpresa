export default function CalcularSalario(bruto, bonus, desconto) {
	if (bruto <= 0) return "Salário Bruto Inválido";
	let acrescimo = (bruto * bonus) / 100;
	let total = bruto - desconto + acrescimo;
	let msg = "O valor do seu salário líquido é de R$ " + total;
	return msg;
}
