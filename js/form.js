document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "51933429595";

  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let empleado = document.querySelector("#empleado").value;
  let servicio = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
	*_REPORTE DE OBSERVACIONES_*%0A
	*MANTENIMIENTO*%0A%0A
	*OBSERVADOR*%0A
	${cliente}%0A
	*ACTIVIDAD*%0A
	${empleado}%0A
	*FECHA*%0A
	${fecha}%0A
	*DETALLE*%0A
	${servicio}%0A
	*COMPROMISO*%0A
	${hora}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu observacion, ${cliente}`;

  window.open(url);
});
