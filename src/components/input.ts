export function input() {
  const app = document.getElementById("app");
  const line = document.createElement("div");
  const range = document.createElement("div");
  const wrapper = document.createElement("div");

  wrapper.classList.add('wrapper');
  range.classList.add('range');
  line.classList.add('line');
  wrapper.appendChild(range);
  wrapper.appendChild(line);
  app?.appendChild(wrapper);

  let dragging = false;

  range.addEventListener('mousedown', draggableFunc);
  // range.addEventListener('mouseup', function() {
  //   range.setAttribute('draggable', 'false')
  // });

  
  function draggableFunc() {
    range.setAttribute('draggable', 'true')
  }

  range.addEventListener('mouseup', function() {
    console.log('mouseup');
  })

  document.addEventListener('mousemove', function() {
    console.log('mousemove');
  })
}