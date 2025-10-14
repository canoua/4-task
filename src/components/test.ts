export function test() {
  class Input {
    range: any = document.getElementById('range');
    // координаты мыши
    x: any = 0;
    y: any = 0;

    // определяем координаты ползунка
    rangeCoords: any = this.range.getBoundingClientRect();
    coords: any = {
        x: this.rangeCoords.left + window.scrollX,
        y: this.rangeCoords.top + window.scrollY
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
      
      // не удалять!
      // console.log(this.coords.x);
      // console.log(this.coords.y);
    }

    mouseDown() {
      console.log('mouseDown');
      document.addEventListener('mousemove', this.handlerMouseMove);
    }

    mouseMove(event: any) {
      this.x = event.clientX;
      this.y = event.clientY;
      console.log(`x=${this.x}, y=${this.y}`);
    }

    mouseUp() {
      console.log('mouseUp');
      // убираем mousemove
      document.removeEventListener('mousemove', this.handlerMouseMove);
      this.newPositionRange();
    }

    newPositionRange() {
      this.coords.x = this.x;
      this.range.style.left = '12px';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input();
  })
}
