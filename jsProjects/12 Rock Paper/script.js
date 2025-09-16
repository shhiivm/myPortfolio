const randNum = Math.floor(Math.random() * 3) + 1;

let computer = function computerChoice() {
  if (randNum == 1) return "rock";
  else if (randNum == 2) return "paper";
  return "scissor";
};

console.log(computer());

document.querySelector("#rock").addEventListener("click", () => {
  console.log('rock')
  if (computer() == "rock") console.log("tie");
  if (computer() == "paper") console.log("lost");
  console.log("won");
});

document.querySelector("#paper").addEventListener("click", () => {
  console.log("paper");
});

document.querySelector("#scissor").addEventListener("click", () => {
  console.log("scissor");
});
