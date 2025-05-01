const converter = document.querySelector("button");
const quilos = document.getElementById("input");
const mensagem = document.querySelector("p");

function conversao() {
  mensagem.style.display = "block";
  const input = Number(quilos.value);
  const result = input * 0.035;
  const formatResult = result.toFixed(2);

  if (input === 0 || input === null) {
    mensagem.innerHTML = "Ops, Algo deu errado...";
  } else {
    mensagem.innerHTML =
      "Você deve tomar " + formatResult + "L, de água por dia.";
  }
}

converter.addEventListener("click", conversao);
