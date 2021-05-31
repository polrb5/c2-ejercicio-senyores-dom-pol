import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;
  const senyorProfesion = senyorElemento.querySelector(".profesion-dato");
  senyorProfesion.textContent = profesion;
  const senyorEstado = senyorElemento.querySelector(".estado-dato");
  senyorEstado.textContent = estado;
  const senyorTwitter = senyorElemento.querySelector(".twitter-dato");
  senyorTwitter.textContent = twitter;
  const imagenFijada = senyorElemento.querySelector(".avatar img");
  const iconoFijado = senyorElemento.querySelector(".icono");
  if (marcado) {
    imagenFijada.classList.add("imagen-fijada");
    iconoFijado.classList.add("icono-fijado");
  }
  const inicial = senyorElemento.querySelector(".inicial");
  const primeraPalabraNombre = nombre.split(" ")[0];
  const segundaPalabraNombre = nombre.split(" ")[1];

  inicial.textContent =
    primeraPalabraNombre.length < 3
      ? segundaPalabraNombre[0]
      : primeraPalabraNombre[0];
  principal.append(senyorElemento);
}

const cantidadSenyores = document.querySelector(".cantidad-senyores");
let senyoresMarcados = 0;
for (const senyor of senyores) {
  if (senyor.marcado) {
    senyoresMarcados++;
  }
}
cantidadSenyores.textContent = senyoresMarcados;
