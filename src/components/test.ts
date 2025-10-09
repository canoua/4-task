export function test() {
  class Input {
    range: any = document.getElementsByClassName('range');
       // координаты
    x: Number = 0;
    y: Number = 0;
    id: any;

    constructor(id: any, dragInput?: any, range?: any) {
      range = this.range;
      id = this.id;
      // range = document.getElementsByClassName('range');
      // range.setAttribute("id", id)
      // dragInput = this.dragInput;
      this.logger();
    }

    dragInput(x?: Number | any, logger?: any, y?: Number | any, range?: HTMLElement, listener?: any) {
      range = this.range;
      listener = this.listener;
      x = this.x;
      y = this.y;
  
      // logger = this.logger;
    }

    logger() {
      console.log('test');
    }


    listener(e: any, x: Number | any, y: Number | any, range: HTMLElement) {
      x = this.x;
      y = this.y;

      // ! - говорит о том, что уверен в типе данных?
      range = this.range;

      range.style.left = e.pageX - x + "px";
      range.style.top = e.pageY - y + "px";
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input('input');
    // input.dragInput();
  })
}