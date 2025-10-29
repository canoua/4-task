export function range() {
  class Input {
    range: any = document.createElement('div');
    line: any = document.createElement('div');
   
    // range_1: any = document.createElement('div');

    app: any;
    // line: any;
    // wrapper: any;
    outputValue: any;
    // координаты мыши
    x: any = 0;
    // x_1: any = 0;

    wrapper:any = document.createElement('div');
    // определяем координаты ползунка
    rangeCoords: any = this.range.getBoundingClientRect();
    wrapperCoords: any = this.wrapper.getBoundingClientRect();
    lineCoords: any = this.line.getBoundingClientRect();
    // rangeCoords_1: any = this.range_1.getBoundingClientRect();

    lineCoordsObj: any = {
      x: this.lineCoords.left
    }

    wrapperCoordsObj: any = {
      x: this.wrapperCoords.left
    }

    // координаты ползунка
    coords: any = {
      x: this.rangeCoords.left
        // x_1: this.rangeCoords_1.left,
    };

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
      // this.positionRange = this.newPositionRange.bind(this);

      document.addEventListener('mousedown', this.handlerMouseDown);
      document.addEventListener('mouseup', this.handlerMouseUp);

    }

    initElememts() {
      // инициализация элементов
      this.app = document.getElementById('app')
      
      // this.wrapper = document.createElement('div');
      this.range = document.createElement('div');
      // this.range_1 = document.createElement('div');
      this.outputValue = document.createElement('div');

      this.range.classList.add('range');  
      // this.range_1.classList.add('range_1');
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
      this.outputValue.classList.add('output-value');
      
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.range);
      // this.line.appendChild(this.range_1);
      this.wrapper.appendChild(this.line);
      this.wrapper.prepend(this.outputValue);

      this.outputValue.textContent='0';

      console.log(this.wrapperCoords);
    }

    mouseDown() {
      document.addEventListener('mousemove', this.handlerMouseMove);
    }

    mouseMove(event: any) {
      this.x = event.clientX-150;
      console.log(this.x);
      
      if(this.x>=0 && this.x<=85) {
        this.range.style.left = `${this.x}px`;
        this.outputValue.textContent = `${this.x}`;
      }
     
      // this.newPositionRange();
    }

    mouseUp() {
      document.removeEventListener('mousemove', this.handlerMouseMove);
      // this.newPositionRange();
      if(this.x>=0 && this.x<=85) {
        this.range.style.left = `${this.x}px`;
        this.outputValue.textContent = `${this.x}`;
      }
      console.log(this.lineCoords);
    }

    // newPositionRange() {
      // нужен рефактор)
      // this.coords.x = this.x;
      // this.range.style.left = `${this.x-this.coords.x}px`;
      // this.outputValue.textContent = `${this.x}`;
    // }
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
    const panel = new Panel();
  })
}
