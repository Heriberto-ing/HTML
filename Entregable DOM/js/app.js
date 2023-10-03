import { personas } from "./persona.js";
import { computersChoiceDisplay } from "./dom.js";

const sectionMain = document.createElement('h4');
const parrafoPrincipal = document.createElement('p');
const parrafoSecun = document.createElement('p');
const parrafoTerce = document.createElement('p');
parrafoPrincipal.innerHTML = personas[0].primerNombre + ' ' +personas[0].apellido;
parrafoSecun.innerHTML = personas[1].primerNombre + ' ' +personas[1].apellido;
parrafoTerce.innerHTML = personas[2].primerNombre + ' ' +personas[2].apellido;
sectionMain.classList.add("main");
document.body.appendChild(parrafoPrincipal);
document.body.appendChild(parrafoSecun);
document.body.appendChild(parrafoTerce);

    const seccion = `
    <section class = "main">
        <p>Avisar al propietario una vez usen la página.</p>
    </section>
    `;

sectionMain.innerHTML = seccion;
document.body.appendChild(sectionMain);