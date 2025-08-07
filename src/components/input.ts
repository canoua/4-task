export function input() {
  class Input {
    // разобраться почему не работает с типом htmlelement|undefined
    app: any;
    line: HTMLElement | undefined;
    range: HTMLElement | undefined;
    wrapper: any;

    constructor(containerClass: any) {
      this.app = document.getElementById(containerClass)
      this.line = document.createElement('div');
      this.wrapper = document.createElement('div');
      this.range = document.createElement('div');

      this.wrapper?.classList.add('wrapper');
      this.app.appendChild(this.wrapper);
      this.range?.classList.add('range');
      this.line?.classList.add('line');
      this.wrapper?.appendChild(this.range);
      this.wrapper.appendChild(this.line);

      this.range?.addEventListener('mousedown', function() {
        this.draggable = true;
      })
    }
  }

  class Panel {
    app: any;
    title: any;
    container: any;
    inputStep: any;
    inputWidth: any;
    inputMin: any;
    constructor(containerClass: any) {
      this.app = document.getElementById(containerClass)
      this.container = document.createElement('div');
      this.container.classList.add('panel-container');
      
      this.inputMin = document.createElement('input');
      this.inputMin.setAttribute('type', 'text');
      this.inputMin.setAttribute('name', 'input-min');
      this.inputMin.classList.add('input-min');
      
      this.title = document.createElement('h1');
      this.title.textContent = 'Панель для управления ползунком';

      this.container.appendChild(this.title)
      this.app.appendChild(this.container);
      this.container.appendChild(this.inputMin)
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input('app');
    const panel = new Panel('app');
  })
}