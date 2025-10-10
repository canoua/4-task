export function test() {
  class Input {
    range: any = document.getElementById('range');
       // координаты
    x: Number = 0;
    y: Number = 0;
    id: any;

    constructor(id: any, mouseDown?: any, range?: any) {
      range = this.range;
      id = this.id;
      mouseDown = this.mouseDown;
      mouseDown(range);
    }

    dragInput(x?: Number | any, y?: Number | any, range?: HTMLElement, listener?: any) {
      range = this.range;
      listener = this.listener;
      x = this.x;
      y = this.y;
    
      this.mouseDown(range);
    }

    mouseDown(elem?: any) {
      elem.addEventListener('mousedown', function(e: any) {
        console.log('mousedown');
        document.addEventListener('mousemove', function() {
          console.log('mousemove');
        })
      })
    }

    mouseDownFunc() {
      
    }


    listener(e: any, x: Number | any, y: Number | any, range: HTMLElement): void {
      x = this.x;
      y = this.y;
      console.log('listener');


      // ! - говорит о том, что уверен в типе данных?
      range = this.range;

      this.range.style.left = e.pageX - x + "px";
      this.range.style.top = e.pageY - y + "px";
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input('input');
  })
}