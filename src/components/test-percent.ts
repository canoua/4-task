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

    percent: any;
    percentMax: any;

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
        this.percent = (e.clientX - this.line.getBoundingClientRect().left)/(this.line.offsetWidth)*100;
        // console.log(this.percent);
        
        // this.thumbPositionInit = e.clientX-this.minX;
        console.log(this.thumbPositionInit);
        console.log(this.percentMax);
        
        this.thumbPositionInit = this.percent;
        // this.thumbPositionInit = e.clientX-this.minX;
        if(e.clientX>=this.minX && e.clientX<=this.maxX) {
          if(this.percent<this.percentMax-15) {
            this.thumb.style.left = `${this.thumbPositionInit}px`;
          this.outputValueMin.textContent=`Первое значение: ${Math.trunc((this.thumbPositionInit)/85*100)}`;
          }// console.log(this.thumbPositionInit);
        }
      } else if(this.draggingAccesMax) {
        this.percentMax = (e.clientX - this.line.getBoundingClientRect().left)/(this.line.offsetWidth)*100;
          // this.thumbMaxPositionInit = e.clientX-this.minX;
          this.thumbMaxPositionInit = this.percentMax;
        if(e.clientX>=this.minX && e.clientX<=this.maxX ) {
        console.log(this.thumbMaxPositionInit);
          this.thumbMax.style.left = `${this.thumbMaxPositionInit}px`;
          this.outputValueMax.textContent=`Второе значение: ${Math.trunc((this.thumbMaxPositionInit)/85*100)}`;
        }
      }
    }

    mouseUp(e: any) {
      if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min')) {
        // if(e.clientX>=this.minX && e.clientX<=this.maxX && this.thumbPositionInit < this.thumbMaxPositionInit - 15) {
        //   this.thumb.style.left = `${this.thumbPositionInit}px`;
        //   this.outputValueMin.textContent=`Первое значение: ${Math.trunc((this.thumbPositionInit)/85*100)}`;
        // }
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
