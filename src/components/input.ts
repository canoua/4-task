export function input() {
  class Input {
    // разобраться почему не работает с типом htmlelement|undefined
    app: any;
    line: HTMLElement | undefined;
    range: HTMLElement | undefined;
    wrapper: HTMLElement | undefined;
    value: any;

    constructor(containerClass: any) {
      this.app = document.getElementById(containerClass)
      this.line = document.createElement('div');
      this.wrapper = document.createElement('div');
      this.range = document.createElement('div');

      this.wrapper.classList.add('wrapper');
      this.app.appendChild(this.wrapper);
      this.range.classList.add('range');
      this.line.classList.add('line');
      this.wrapper.appendChild(this.range);
      this.wrapper.appendChild(this.line);

      this.range.addEventListener('mousedown', function() {
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

      this.title = document.createElement('h1');
      this.title.textContent = 'Панель для управления ползунком';

      this.app.appendChild(this.container);
      this.container.appendChild(this.title);
      this.createInput(this.container, this.inputWidth, 'input-width', 'Длина', 'input-width');
      this.createInput(this.container, this.inputStep, 'input-step', 'Шаг', 'input-step');
      this.createInput(this.container, this.inputMin, 'input-min', 'Минимальное значение', 'input-min');
    }

    createInput(parent: any, element: any, name: string, placeholder: string, className: string) {
      element = document.createElement('input');
      element.setAttribute('type', 'text');
      element.setAttribute('name', name); 
      element.setAttribute('placeholder', placeholder);                                 
      element.classList.add(className);
      parent.appendChild(element);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input('app');
    const panel = new Panel('app');
  })
}