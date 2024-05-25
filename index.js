function transmit(btn) {
let base = btn.parentElement;
let tempo = base.querySelector("#tempo");
let pessoa = base.querySelector("#pessoa");
let horas = base.querySelector("#horas");
let minutos = base.querySelector("#minutos");
let segundos = base.querySelector("#segundos");
let nome = base.querySelector("#nome");

let on = false;
tempo.textContent = horas.value.padStart(2, '0') + ":" + minutos.value.padStart(2, '0') + ":" + segundos.value.padStart(2, '0');
pessoa.textContent = nome.value;
if (base.intervalo) {
    clearInterval(base.intervalo);
}
base.intervalo = setInterval(() => {
    if (on == false) {
    if (Number(segundos.value) > 0) {
        segundos.value = Number(segundos.value) - 1;
    } else if (Number(minutos.value) > 0) {
        minutos.value = Number(minutos.value) - 1;
        segundos.value = 59;
    } else if (Number(horas.value) > 0) {
        horas.value = Number(horas.value) - 1;
        minutos.value = 59;
        segundos.value = 59;
    }
    tempo.textContent = horas.value.padStart(2, '0') + ":" + minutos.value.padStart(2, '0') + ":" + segundos.value.padStart(2, '0');
    }
}, 1000);
}

function transmit2(btn) {
let base = btn.parentElement;
base.on = true;
if (base.intervalo) {
    clearInterval(base.intervalo);
}
}

function duplicar() {
let clone = base.cloneNode(true);
clone.id = "base" + (document.querySelectorAll('div[id^="base"]').length + 1);
document.body.appendChild(clone);
}