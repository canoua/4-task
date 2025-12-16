export class Slider {
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
  step: number;

  constructor(min: number, max: number, step: number) {
    this.thumbPositionInit = min;
    this.thumbMaxPositionInit = max;
    this.step = step;
    this.initElememts(min, max);
    document.addEventListener('mousedown', (e) => this.mouseDown(e));
    document.addEventListener('mousemove', (e) => this.mouseMove(e, step));
    document.addEventListener('mouseup', (e) => this.mouseUp(e));

    document.addEventListener('mouseup', () => {
      this.draggingAcces = false;
      this.draggingAccesMax = false;
    })
  }

  initElememts(min: number, max: number) {
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
    this.setThumbPosition(this.thumb, this.percent);
    this.percentMax = Math.max(0, Math.min((max-this.thumb.offsetWidth/2)/(this.line.offsetWidth)*100, 100));
    this.thumbMax.style.left = `${this.percentMax}px`;
    this.range.style.left = `${min+1}px`;
    this.outputValueMin.textContent=`min ${min}`;
    this.outputValueMax.textContent=`max ${max}`;
  }

  setThumbPosition(thumb: HTMLElement, positionPercent: number) {
    thumb.style.left = `${positionPercent}px`;
  }

  mouseDown(e: any) {
    if (
      e.target.classList.contains('thumb') && 
      e.target.classList.contains('thumb-min')
    ) {
      this.draggingAcces = true;
    }  else if (e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max')) {
      this.draggingAccesMax = true;
    }
  }

  mouseMove(e: any, step: number) {
    if (this.draggingAcces) {
      this.percent = Math.max(0, Math.min((e.clientX - this.line.getBoundingClientRect().left)/(this.line.offsetWidth) * 100, 100));
      this.rangePositionInit = this.percent + 1;
      let valueMin = Math.trunc((this.percent)/85 * 100);
      
      if (
        e.clientX>=this.minX && 
        e.clientX<=this.maxX && 
        this.thumbPositionInit<(this.thumbMaxPositionInit - this.thumb.offsetWidth) 
        && this.percent % step == 0
      ) {
        this.thumb.style.left = `${this.percent}px`;
        this.range.style.left = `${this.percent}px`;
        this.range.style.width = `${this.percentMax - this.percent}px`;
        this.outputValueMin.textContent=`min ${Math.round(valueMin / step) * step}`;
      }
    } else if (this.draggingAccesMax) {
      this.percentMax = Math.max(0, Math.min((e.clientX - this.line.getBoundingClientRect().left)/(this.line.offsetWidth) * 100, 100));
      this.thumbMaxPositionInit = this.percentMax;
      let valueMax = Math.trunc((this.percentMax)/85 * 100)
      if (
        e.clientX>=this.minX && 
        e.clientX<=this.maxX && 
        this.percentMax>(this.percent + this.thumb.offsetWidth) && 
        this.percentMax % step == 0
      ) {
        this.thumbMax.style.left = `${this.percentMax}px`;
        this.range.style.left = `${this.percent}px`;
        this.range.style.width = `${this.percentMax - this.percent + 1}px`;
        this.outputValueMax.textContent=`max ${Math.round(valueMax / step) * step}`;
      }
    }
  }

  mouseUp(e: any) {
    if (e.target.classList.contains('thumb') && e.target.classList.contains('thumb-min')) {
      this.draggingAcces = false;
    } else if (e.target.classList.contains('thumb') && e.target.classList.contains('thumb-max')) {
      this.draggingAccesMax = false;
    }
  }
}
