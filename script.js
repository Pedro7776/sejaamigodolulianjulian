const form = document.getElementById("friend-form");
const compliment = document.getElementById("elogio");
const errorMessage = document.getElementById("error-message");
const formSection = document.querySelector(".form-section");
const successSection = document.getElementById("success");
const restartButton = document.getElementById("restart");

// O aviso só aparece depois de uma tentativa inválida.
// A expressão "meu bem" é obrigatória, sem diferenciar maiúsculas/minúsculas.
form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede qualquer envio de formulário

  const text = compliment.value.toLocaleLowerCase("pt-BR");

  // oi liz vc é meu bem mesmo tá
  if (!text.includes("meu bem")) {
    errorMessage.classList.add("visible");
    compliment.focus();
    return;
  }

  errorMessage.classList.remove("visible");
  formSection.hidden = true;
  document.querySelector(".sad-section").hidden = true;
  successSection.hidden = false;
  successSection.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Se a liz corrigir o elogio, o aviso some enquanto ele digita.
compliment.addEventListener("input", function () {
  if (compliment.value.toLocaleLowerCase("pt-BR").includes("meu bem")) {
    errorMessage.classList.remove("visible");
  }
});

restartButton.addEventListener("click", function () {
  form.reset();
  errorMessage.classList.remove("visible");
  successSection.hidden = true;
  formSection.hidden = false;
  document.querySelector(".sad-section").hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
