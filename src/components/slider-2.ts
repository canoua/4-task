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
    rangeCoords: any = this.thumb.getBoundingClientRect();
    wrapperCoords: any = this.wrapper.getBoundingClientRect();
    lineCoords: any = this.line.getBoundingClientRect();
    draggingAcces: any = false;
    draggingAccesMax: any = false;
    thumbPosition: number = 0;
    thumbMaxPosition: number = 0;

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
      this.outputValueMin.textContent=`Первое значение: ${this.thumbPosition}`;
      this.outputValueMax.textContent=`Второе значение: ${this.thumbMaxPosition}`;
      const lineWidth = this.line.offsetWidth;
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = lineWidth + linePosition.left;
      this.minX = linePosition.left;
      this.maxX = lineMaxPosition;
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
        if(e.clientX>=this.minX && e.clientX<=235) {
          this.thumbPosition = e.clientX-this.minX;
          this.thumb.style.left =  `${this.thumbPosition}px`;
          this.outputValueMin.textContent=`Первое значение: ${Math.trunc((this.thumbPosition)/85*100)}`;
        }
        
      } else if(this.draggingAccesMax) {
        if(e.clientX>=this.minX && e.clientX<=235) {
          this.thumbMaxPosition = e.clientX-this.minX;
          this.thumbMax.style.left = `${this.thumbMaxPosition}px`;
          this.outputValueMax.textContent=`Второе значение: ${Math.trunc((this.thumbMaxPosition)/85*100)}`;
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

  document.addEventListener('DOMContentLoaded', function() {
    const slider = new Slider();
  })
}
