export function slider() {
  class Slider {
    thumb: any = document.createElement('div');
    line: any = document.createElement('div');
    app: any;
    // outputValue: any;
    x: any = 0;
    minX: any;
    maxX: any;
    wrapper:any = document.createElement('div');
    rangeCoords: any = this.thumb.getBoundingClientRect();
    wrapperCoords: any = this.wrapper.getBoundingClientRect();
    lineCoords: any = this.line.getBoundingClientRect();
    positionRange: any;
    
    draggingAcces: any = false;

    constructor() {
      this.initElememts();
      document.addEventListener('mousedown', (e) => this.mouseDown(e));
      document.addEventListener('mousemove', (e) => this.mouseMove(e));
      document.addEventListener('mouseup', (e) => this.mouseUp(e));
    }

    // инициализация элементов
    initElememts() {
      this.app = document.getElementById('app')
      this.thumb = document.createElement('div');
      // this.outputValue = document.createElement('div');
      this.thumb.classList.add('thumb');  
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
      // this.outputValue.classList.add('output-value');
      
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.thumb);
      this.wrapper.appendChild(this.line);
      // this.wrapper.prepend(this.outputValue);

      // this.outputValue.textContent='0';
      const lineWidth = this.line.offsetWidth;
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = lineWidth + linePosition.left;
 
      console.log(lineWidth);
      this.minX = linePosition.left;
      this.maxX = lineMaxPosition;
    }

    mouseDown(e: MouseEvent) {
      this.draggingAcces = true;
    }


    mouseMove(e: any) {
      if(this.draggingAcces==true) {
        console.log(e.clientX);
        this.thumb.style.left = `${e.clientX}px`;
      }
    }

    mouseUp(e: MouseEvent) {
      this.draggingAcces = false;
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
    const slider = new Slider();
  })
}
