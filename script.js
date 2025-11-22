let arr = [
  "Dream big. Start small. Act now.",

  "Discipline beats motivation every time.",

  "Your future is created by what you do today.",

  "Small steps lead to big changes.",

  "Success is built on consistency, not intensity.",

  "Focus is a superpower.",

  "Be better than you were yesterday.",

  "Don’t wait for the perfect moment; create it.",

  "Doubt kills more dreams than failure ever will.",

  "Work in silence; results will speak.",

  "Every day is a new chance to improve.",

  "Failure is not the opposite of success; it's part of it.",

  "You become what you repeatedly do.",

  "Action cures fear.",

  "Growth begins at the end of your comfort zone.",

  "The harder you work, the luckier you get.",

  "Your mindset decides your reality.",

  "Keep going. Everything you want is on the other side of effort.",

  "Believe you can, and you're halfway there.",

  "Progress over perfection.",
];

let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const h1 = document.createElement("h1");
  const x = Math.random() * 90;
  const y = Math.random() * 80;
  const rot = Math.random() * 360;
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  h1.style.color = color;
  h1.style.left = `${x}%`;
  h1.style.top = `${y}%`;
  h1.style.rotate = `${rot}deg`;

  h1.innerHTML = arr[randomIndex];
  h1.style.position = "absolute";
  main.appendChild(h1);
});
