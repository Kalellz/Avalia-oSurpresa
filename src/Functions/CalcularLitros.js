export default function CalcularLitros(estudantes, minimoLitros, mililitros) {
	let multiplo = 1;
	let litros = (estudantes * mililitros) / 1000;
	let calc = minimoLitros * multiplo;
	while (calc < litros) {
		multiplo++;
		calc = minimoLitros * multiplo;
	}
	return calc;
}
