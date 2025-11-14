export function slider() {
  class Slider {
    thumb: any = document.createElement('div');
    thumbMax: any = document.createElement('div');
    line: any = document.createElement('div');
    app: any;
 
    // x: any = 0;
    minX: any;
    maxX: any;
    middleThumb: any;
    wrapper:any = document.createElement('div');
    rangeCoords: any = this.thumb.getBoundingClientRect();
    wrapperCoords: any = this.wrapper.getBoundingClientRect();
    lineCoords: any = this.line.getBoundingClientRect();
    
    draggingAcces: any = false;
    draggingAccesMax: any = false;


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
     
      this.thumb.classList.add('thumb', 'thumb-min');  
      this.thumbMax.classList.add('thumb', 'thumb-max');  
      this.line.classList.add('line');
      this.wrapper.classList.add('wrapper');
   
      
      this.app.appendChild(this.wrapper);
      this.line.appendChild(this.thumb);
      this.line.appendChild(this.thumbMax);
      this.wrapper.appendChild(this.line);
   
      const lineWidth = this.line.offsetWidth;
      const linePosition = this.line.getBoundingClientRect();
      const lineMaxPosition = lineWidth + linePosition.left;
      const middleThumb = this.thumb.offsetWidth / 2;

      this.middleThumb = middleThumb;
      this.minX = linePosition.left;
      
      this.maxX = lineMaxPosition;
    }

    mouseDown(e: any) {
      if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min')) {
        this.draggingAcces = true;
      } else if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max')) {
        this.draggingAccesMax = true;
      }  
    }

    mouseMove(e: any) {
      if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min') && this.draggingAcces) {
          
        // if(e.clientX>=this.minX && e.clientX<=235) {
          // const elemMin =  e.target.contains('thumb-min');
          // позиция 1го ползунка - позиция мыши - минус позиция линии
         e.target.style.left = `${e.clientX-this.minX}px`;
          console.log(Math.trunc((e.clientX-this.minX)/85*100));
        // }
      } else if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max') && this.draggingAccesMax) {
        // console.log(2);
        // if(e.clientX>=this.minX && e.clientX<=235) {
          // const elem = e.target.contains('thumb-max')
          e.target.style.left = `${e.clientX-this.minX}px`;
          console.log(Math.trunc((e.clientX-this.minX)/85*100));
        // }
      }
    }

    mouseUp(e: any) {
      if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min') || this.draggingAcces) {
        this.draggingAcces = false;
      } else if(e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max') || this.draggingAccesMax) {
        this.draggingAccesMax = false;
       }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const slider = new Slider();
  })
}
