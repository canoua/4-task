export function input() {
  const app = document.getElementById("app");
  const line = document.createElement("div");
  const range = document.createElement("div");
  const wrapper = document.createElement("div");

  range.setAttribute('draggable', 'true');
  wrapper.classList.add('wrapper');
  range.classList.add('range');
  line.classList.add('line');
  wrapper.appendChild(range);
  wrapper.appendChild(line);

  app?.appendChild(wrapper)
}