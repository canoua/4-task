export function test() {
  class Input {
    range: any = document.getElementById('range');
       // координаты
    x: any = 0;
    y: any = 0;
    id: any;

    constructor(range?: any) {
      this.range = range; 
      document.addEventListener('mousedown', this.mouseDown);
      document.addEventListener('mouseup', this.mouseUp);
      this.mouseMove;
      
    }

    mouseDown() {
      console.log('mouseDown');
    }

    mouseMove(e: MouseEvent) {
      console.log('mouseMove');
      this.range.style.left = `${e.pageX - this.x}px`;
      this.range.style.top = `${e.pageY - this.y}px`;
      console.log(this.x);
      
    }

    mouseUp() {
      console.log('mouseUp');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input();
  })
}