const valorlaptop = 400000;
const cantidad = document.querySelector("#p-cantidad");
const totalCantidad = document.querySelector("#total-cantidad");
const valorTotal = document.querySelector("#total-valor");
const btnClick = document.querySelector("#btn");
const colorSelect = document.querySelector("#colorSelect");
const colorC = document.querySelector("#colorCircle");

/* button */
btnClick.addEventListener("click", () => {
	/* valor */
	const valorMulti = cantidad.value * valorlaptop;
	valorTotal.textContent = "Total: $" + valorMulti.toLocaleString();
	/* cantidad */
	totalCantidad.textContent = "Cantidad: " + cantidad.value;
	/* color */
	colorC.style.backgroundColor = colorSelect.value;
});
