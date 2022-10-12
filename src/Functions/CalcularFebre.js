export default function CalcularFebre(Temperatura) {
	if (Temperatura >= 41) return "Hipertermia";
	else if (Temperatura >= 39.6 && Temperatura < 41) return "Febre Alta";
	else if (Temperatura >= 37.6 && Temperatura < 39.6) return "Febre";
	else if (Temperatura >= 36 && Temperatura < 37.6) return "Normal";
	else if (Temperatura < 36) return "Hiportermia";
}
