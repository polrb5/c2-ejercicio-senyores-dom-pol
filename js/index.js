import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter } of senyores) {
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

  principal.append(senyorElemento);
}
