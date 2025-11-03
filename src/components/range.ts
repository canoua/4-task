export function range() {
  class Input {
    range: any = document.createElement('div');
    line: any = document.createElement('div');
    app: any;
    outputValue: any;
    x: any = 0;
    minX: any;
    maxX: any;
    wrapper:any = document.createElement('div');
    rangeCoords: any = this.range.getBoundingClientRect();
    wrapperCoords: any = this.wrapper.getBoundingClientRect();
    lineCoords: any = this.line.getBoundingClientRect();
    positionRange: any;

    // свойства обработчиков событий мыши
    handlerMouseDown: any;
    handlerMouseUp: any;
    handlerMouseMove: any;

    constructor() {
      this.initElememts();
      this.handlerMouseDown = this.mouseDown.bind(this);
      this.handlerMouseUp = this.mouseUp.bind(this);
      this.handlerMouseMove = this.mouseMove.bind(this);
      document.addEventListener('mousedown', this.handlerMouseDown);
      document.addEventListener('mouseup', this.handlerMouseUp);

      console.log(`Позиция line слева - ${this.minX}`);
      console.log(`Позиция line справа - ${this.maxX}`);
    }

    // инициализация элементов
    initElememts() {
      this.app = document.getElementById('app')
      this.range = document.createElement('div');
      this.outputValue = document.createElement('div');
      this.range.classList.add('range');  
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
      this.outputValue.classList.add('output-value');
      
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.range);
      this.wrapper.appendChild(this.line);
      this.wrapper.prepend(this.outputValue);

      this.outputValue.textContent='0';
      const lineWidth = this.line.offsetWidth;
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = lineWidth + linePosition.left;
 
      console.log(lineWidth);
      this.minX = linePosition.left;
      this.maxX = lineMaxPosition;
    }

    mouseDown() {
      document.addEventListener('mousemove', this.handlerMouseMove);
    }

    mouseMove(event: any) {
      this.x = event.clientX;
      console.log(event.clientX);
      
      this.range.style.left = `${this.x}px`;
      this.outputValue.textContent = `${this.x}`;
    }

    mouseUp() {
      document.removeEventListener('mousemove', this.handlerMouseMove);
      this.range.style.left = `${this.x}px`;
      this.outputValue.textContent = `${this.x}`;
    }
  }

    class Panel {
      app: any;
      title: any;
      container: any;
      inputStep: any;
      inputWidth: any;
      inputMin: any;
      constructor() {
        this.app = document.getElementById('app')
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
    const input = new Input();
    // const panel = new Panel();
  })
}
