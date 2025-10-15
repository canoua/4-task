export function test() {
  class Input {
    range: any = document.getElementById('range');
    line: any = document.getElementById('line');
    // координаты мыши
    x: any = 0;
    y: any = 0;

    // определяем координаты ползунка
    rangeCoords: any = this.range.getBoundingClientRect();
    coords: any = {
        x: this.rangeCoords.left,
        y: this.rangeCoords.top + window.scrollY,
        minX: 0,
        maxX: 80
    };

    positionRange: any;

    // свойства обработчиков событий мыши
    handlerMouseDown: any;
    handlerMouseUp: any;
    handlerMouseMove: any;

    constructor(range?: any) {
      range = this.range;
    
      this.handlerMouseDown = this.mouseDown.bind(this);
      this.handlerMouseUp = this.mouseUp.bind(this);
      this.handlerMouseMove = this.mouseMove.bind(this);
      this.positionRange = this.newPositionRange.bind(this);

      document.addEventListener('mousedown', this.handlerMouseDown);
      document.addEventListener('mouseup', this.handlerMouseUp);
    }

    mouseDown() {
      document.addEventListener('mousemove', this.handlerMouseMove);
    }

    mouseMove(event: any) {
      this.x = event.clientX;
      this.y = event.clientY;
      this.newPositionRange();
    }

    mouseUp() {
      document.removeEventListener('mousemove', this.handlerMouseMove);
      this.newPositionRange();
    }

    newPositionRange() {
      // нужен рефактор)
      if(this.x>=150 && this.x<=235) {
        this.coords.x = this.x;
        this.range.style.left = `${this.x-150}px`;
        console.log(this.range.style.left);
      } else {
        this.coords.x = 0
      }
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
    const panel = new Panel();
  })
}
