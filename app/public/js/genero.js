const female = dataJS("female");
const male = dataJS("male");
const comments = dataJS("comments");
const one = dataJS("1");
const two = dataJS("2");
const three = dataJS("3");
const four = dataJS("4");
const five = dataJS("5");
if (!dataJS("edit")) {
  console.log("ok");
}
female.addEventListener("click", () => {
  female.classList.add("select");
  male.classList.remove("select");

  one.innerHTML = "Solteira";
  one.value = "Solteira";

  two.innerHTML = "Casada";
  two.value = "Casada";

  three.innerHTML = "Divorciada";
  three.value = "Divorciada";

  four.innerHTML = "Viúva";
  four.value = "Viúva";

  five.innerHTML = "Separada";
  five.value = "Separada";

  if (!dataJS("edit")) {
    comments.innerHTML =
      "Fácil adaptação, responsável, educada, simpática, com espírito de trabalho em equipe e aberto a novas experiências de acordo com os interesses da empresa.";
  }
});

male.addEventListener("click", () => {
  female.classList.remove("select");
  male.classList.add("select");
  one.innerHTML = "Solteiro";
  one.value = "Solteiro";

  two.innerHTML = "Casado";
  two.value = "Casado";

  three.innerHTML = "Divorciado";
  three.value = "Divorciado";

  four.innerHTML = "Viúvo";
  four.value = "Viúvo";

  five.innerHTML = "Separado";
  five.value = "Separado";

  if (!dataJS("edit")) {
    comments.innerHTML =
      "Fácil adaptação, responsável, educado, simpático, com espírito de trabalho em equipe e aberto a novas experiências de acordo com os interesses da empresa.";
  }
});
