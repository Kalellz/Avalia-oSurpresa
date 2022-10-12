function SignoLibra(date) {
	const newMonth = date.slice(5, 7);
	const newDay = date.slice(8, 11);
	if (newMonth != 10 && newMonth != 9) return "Não";
	else if (newMonth == 9 && newDay >= 23 && newDay <= 30) return "Sim";
	else if (newMonth == 10 && newDay <= 22 && newDay >= 1) return "Sim";
	else return "Não";
}
export default SignoLibra;
