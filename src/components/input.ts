export function input() {
  class Input {
    // разобраться почему не работает с типом htmlelement|undefined
    app: any;
    line: HTMLElement | undefined;
    range: HTMLElement;
    wrapper: HTMLElement | undefined;
    value: any;
    // координаты
    x: Number = 0;
    y: Number = 0;

    constructor(containerClass: any, dragInput?: any, range?: HTMLElement) {
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
  

      dragInput = this.dragInput;
      range = this.range;
     
      document.addEventListener('DOMContentLoaded', dragInput());
    }

    dragInput(x: Number | any, y: Number | any, range?: HTMLElement, listener?: any): void {
      range = this.range;
      listener = this.listener;
      x = this.x;
      y = this.y;
      range?.addEventListener('mousedown', function(e: any) {
        document.addEventListener('mousemove', listener);
        x = e.clientX - range.getBoundingClientRect().left;
        y = e.clientY - range.getBoundingClientRect().top;
      })
    }

    listener(e: any, x: Number | any, y: Number | any, range: HTMLElement) {
      x = this.x;
      y = this.y;

      // ! - говорит о том, что уверен в типе данных?
      range = this.range!;

      range.style.left = e.pageX - x + "px";
      range.style.top = e.pageY - y + "px";
     
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
    // const panel = new Panel('app');
    // console.log(input.range);
    
    // input.dragInput();
  })
}