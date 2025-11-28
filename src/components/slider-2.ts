export function slider() {
  class Slider {
    thumb: any = document.createElement('div');
    thumbMax: any = document.createElement('div');
    line: any = document.createElement('div');
    app: any;
    outputValueMin: any;
    outputValueMax: any;
    minX: any;
    maxX: any;
    wrapper:any = document.createElement('div');
    draggingAcces: any = false;
    draggingAccesMax: any = false;

    thumbPosition: number = 0;
    thumbMaxPosition: number = 0;

    thumbPositionInit: any;
    thumbMaxPositionInit: any;

    constructor() {
      this.initElememts();
      document.addEventListener('mousedown', (e) => this.mouseDown(e));
      document.addEventListener('mousemove', (e) => this.mouseMove(e));
      document.addEventListener('mouseup', (e) => this.mouseUp(e));

      document.addEventListener('mouseup', () => {
        this.draggingAcces = false;
        this.draggingAccesMax = false;
      })
    }

    // инициализация элементов
    initElememts() {
      this.app = document.getElementById('app')
      this.outputValueMin = document.createElement('div');
      this.outputValueMax = document.createElement('div');
      this.thumb.classList.add('thumb', 'thumb-min');  
      this.thumbMax.classList.add('thumb', 'thumb-max');  
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
      this.outputValueMin.classList.add('output-value');
      this.outputValueMax.classList.add('output-value');
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.thumb);
      this.line.appendChild(this.thumbMax);
      this.wrapper.appendChild(this.line);
      this.wrapper.prepend(this.outputValueMin);
      this.wrapper.prepend(this.outputValueMax);
      
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = this.line.offsetWidth + linePosition.left;
      this.minX = linePosition.left;
      this.maxX = lineMaxPosition - this.thumb.offsetWidth;
      this.thumbPositionInit = this.thumb.getBoundingClientRect().left - linePosition.left;
      this.thumbMaxPositionInit = this.thumbMax.getBoundingClientRect().left - linePosition.left;

      this.outputValueMin.textContent=`Первое значение: ${this.thumbPositionInit}`;
      this.outputValueMax.textContent=`Второе значение: ${this.thumbMaxPositionInit}`;
    }

    mouseDown(e: any) {
      if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min')) {
        this.draggingAcces = true;
      }  else if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max')) {
        this.draggingAccesMax = true;
      }
    }

    mouseMove(e: any) {
      if(this.draggingAcces) {
        this.thumbPositionInit = e.clientX-this.minX;
        if(e.clientX>=this.minX && e.clientX<=this.maxX && (Math.trunc((this.thumbPositionInit)/85*100) < Math.trunc((this.thumbMaxPositionInit)/85*100) - this.thumb.offsetWidth)) {
          console.log( this.thumbPositionInit);
          
          this.thumb.style.left = `${this.thumbPositionInit}px`;
          this.outputValueMin.textContent=`Первое значение: ${Math.trunc((this.thumbPositionInit)/85*100)}`;
        }
      } else if(this.draggingAccesMax) {
          this.thumbMaxPositionInit = e.clientX-this.minX;
        if(e.clientX>=this.minX && e.clientX<=this.maxX && (this.thumbMaxPositionInit > this.thumbPositionInit + this.thumb.offsetWidth)) {
        console.log(this.thumbMaxPositionInit);
          this.thumbMax.style.left = `${this.thumbMaxPositionInit}px`;
          this.outputValueMax.textContent=`Второе значение: ${Math.trunc((this.thumbMaxPositionInit)/85*100)}`;
        }
      }
    }

    mouseUp(e: any) {
      if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min')) {
        this.draggingAcces = false;
      } else if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max')) {
        this.draggingAccesMax = false;
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
    const slider = new Slider();
    const panel = new Panel();
  })
}
