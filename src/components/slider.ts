export function slider() {
  class Slider {
    thumb: any = document.createElement('div');
    thumbMax: any = document.createElement('div');
    line: any = document.createElement('div');
    app: any;
    // outputValue: any;
    x: any = 0;
    minX: any;
    maxX: any;
    middleThumb: any;
    wrapper:any = document.createElement('div');
    rangeCoords: any = this.thumb.getBoundingClientRect();
    wrapperCoords: any = this.wrapper.getBoundingClientRect();
    lineCoords: any = this.line.getBoundingClientRect();
    
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
      // this.outputValue = document.createElement('div');
      this.thumb.classList.add('thumb', 'thumb-min');  
      this.thumbMax.classList.add('thumb', 'thumb-max');  
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
      // this.outputValue.classList.add('output-value');
      
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.thumb);
      this.line.appendChild(this.thumbMax);
      this.wrapper.appendChild(this.line);
      // this.wrapper.prepend(this.outputValue);

      // this.outputValue.textContent='0';
      const lineWidth = this.line.offsetWidth;
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = lineWidth + linePosition.left;
      const middleThumb = this.thumb.offsetWidth / 2;

      this.middleThumb = middleThumb;
      this.minX = linePosition.left;
      
      this.maxX = lineMaxPosition;
    }

    mouseDown(e: MouseEvent) {
      this.draggingAcces = true;
    }


    mouseMove(e: any) {
      if(this.draggingAcces==true) {
        if(e.clientX>=this.minX && e.clientX<=235) {
          this.thumb.style.left = `${e.clientX-this.minX}px`;
          // console.log(this.thumb.style.left);
         if(e.target.className==='thumb thumb-min') {
            console.log(e.target);
          } else if(e.target.className==='thumb thumb-max'){
            console.log('max');
          }
          console.log(Math.trunc((e.clientX-this.minX)/85*100));
        }

      }
    }

    mouseUp(e: MouseEvent) {
      this.draggingAcces = false;
      if(e.clientX>=this.minX && e.clientX<=235) {
        this.thumb.style.left = `${e.clientX-this.minX}px`;
        console.log(Math.trunc((e.clientX-this.minX)/85*100));
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
