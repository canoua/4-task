export function test() {
  class Input {
    range: any = document.getElementById('range');
       // координаты
    x: any = 0;
    y: any = 0;
    id: any;

    // добавить свойства обработчиков событий мыши
    // затем привязать с помощью bind

    constructor(range?: any) {
      this.range = range; 
      document.addEventListener('mousedown', this.mouseDown);
      document.addEventListener('mouseup', this.mouseUp);
      // document.addEventListener('mousemove', this.mouseMove);
    }

    mouseDown( event?: any, x?: any, y?: any) {
      console.log('mouseDown');
      this.mouseMove
    }

    mouseMove() {
      console.log('mouseMove');
    }

    mouseUp() {
      console.log('mouseUp');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input();
    // input.mouseDown();
  })
}
