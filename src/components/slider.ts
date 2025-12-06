export function slider() {
  class Slider {
    wrapper: HTMLElement = document.createElement('div');
    thumb: HTMLElement = document.createElement('div');
    thumbMax: HTMLElement = document.createElement('div');
    line: HTMLElement = document.createElement('div');
    range: HTMLElement = document.createElement('div');
    outputWrapper: any = document.createElement('div');
    app: HTMLElement | any;
    outputValueMin: HTMLElement | any;
    outputValueMax: HTMLElement | any;
    minX: number | any;
    maxX: number | any;
   
    draggingAcces: boolean = false;
    draggingAccesMax: boolean = false;

    thumbPosition: number = 0;
    thumbMaxPosition: number = 0;

    thumbPositionInit: any;
    rangePositionInit: any;
    thumbMaxPositionInit: any;

    percent: any;
    percentMax: any;

    constructor(min: number, max: number) {
      
      this.thumbPositionInit = min;
      this.thumbMaxPositionInit = max;
      // max = ;
      this.initElememts(min, max);
      document.addEventListener('mousedown', (e) => this.mouseDown(e));
      document.addEventListener('mousemove', (e) => this.mouseMove(e));
      document.addEventListener('mouseup', (e) => this.mouseUp(e));

      document.addEventListener('mouseup', () => {
        this.draggingAcces = false;
        this.draggingAccesMax = false;
      })
      
    }

    // инициализация элементов
    initElememts(min: number, max: number) {
      // this.thumbPositionInit = min;
      // this.thumbMaxPositionInit = max;
      this.app = document.getElementById('app')
      this.outputValueMin = document.createElement('div');
      this.outputValueMax = document.createElement('div');
      this.range.classList.add('range');
      this.thumb.classList.add('thumb', 'thumb-min');  
      this.thumbMax.classList.add('thumb', 'thumb-max');  
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
      this.outputValueMin.classList.add('output-value');
      this.outputValueMax.classList.add('output-value');
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.thumb);
      this.line.appendChild(this.thumbMax);
      this.line.appendChild(this.range);
      this.wrapper.appendChild(this.line);
     
      this.wrapper.prepend(this.outputWrapper);
      this.outputWrapper.classList.add('output-wrapper');
      this.outputWrapper.appendChild(this.outputValueMin);
      this.outputWrapper.appendChild(this.outputValueMax);
      
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = this.line.offsetWidth + linePosition.left;
      this.minX = linePosition.left;
      this.maxX = lineMaxPosition - this.thumb.offsetWidth; 

      this.percent = Math.max(0, Math.min((min-this.thumb.offsetWidth/2)/(this.line.offsetWidth)*100, 100));
      this.thumb.style.left = `${this.percent}px`;
      this.percentMax = Math.max(0, Math.min((max-this.thumb.offsetWidth/2)/(this.line.offsetWidth)*100, 85));
      this.thumbMax.style.left = `${this.percentMax}px`;

      this.range.style.left = `${min+1}px`;
      this.outputValueMin.textContent=`min ${min}`;
      this.outputValueMax.textContent=`max ${max}`;
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
        this.percent = Math.max(0, Math.min((e.clientX - this.line.getBoundingClientRect().left)/(this.line.offsetWidth)*100, 100));
        this.thumbPositionInit = this.percent;
        this.rangePositionInit = this.percent + 1;
      
        if(e.clientX>=this.minX && e.clientX<=this.maxX && this.thumbPositionInit<(this.thumbMaxPositionInit - 15)) {
          this.thumb.style.left = `${this.thumbPositionInit}px`;
          this.range.style.left = `${this.rangePositionInit}px`;
          this.range.style.width = `${this.thumbMaxPositionInit - this.thumbPositionInit}px`;
          this.outputValueMin.textContent=`min ${Math.trunc((this.thumbPositionInit)/85*100)}`;
        }
      } else if(this.draggingAccesMax) {
        this.percentMax = Math.max(0, Math.min((e.clientX - this.line.getBoundingClientRect().left)/(this.line.offsetWidth)*100, 85));
        this.thumbMaxPositionInit = this.percentMax;
        if(e.clientX>=this.minX && e.clientX<=this.maxX && this.thumbMaxPositionInit>(this.thumbPositionInit+15)) {
          this.thumbMax.style.left = `${this.thumbMaxPositionInit}px`;
          this.range.style.left = `${this.rangePositionInit}px`;
          this.range.style.width = `${this.thumbMaxPositionInit - this.thumbPositionInit + 1}px`;
          this.outputValueMax.textContent=`max ${Math.trunc((this.thumbMaxPositionInit)/85*100)}`;
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
        this.createInput(this.container, 'input', 'input', 'step')
        this.createInput(this.container, 'input', 'input', 'step')
      }

      createInput(parent?: any, element?: any, name?: string, placeholder?: string, className?: string) {
        element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.setAttribute('name', name); 
        element.setAttribute('placeholder', placeholder);                                 
        element.classList.add(className);
        parent.appendChild(element);
      }
  }


  document.addEventListener('DOMContentLoaded', function() {
    const slider = new Slider(50, 75);
    const panel = new Panel();
  })
}
