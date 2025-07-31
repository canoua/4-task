export function component() {
  const app = document.getElementById("app");
  const input = document.createElement("input");
  input.setAttribute('type', 'range')
  app?.appendChild(input);
}

