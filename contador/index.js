const dimin = document.getElementById("dimin");
const reset = document.getElementById("reset");
const aum = document.getElementById("aum");
const contador = document.getElementById("contador");
let cont = 0;

aum.onclick = function () {
    cont++
    contador.textContent = cont;
}

dimin.onclick = function () {
    cont--
    contador.textContent = cont;
}

reset.onclick = function () {
    cont = 0;
    contador.textContent = cont;
}