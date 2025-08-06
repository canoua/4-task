export function input() {
  class Input {
    // разобраться почему не работает с типом htmlelement|undefined
    // главный контейнер
    app: any;
    // линия инпута
    line: HTMLElement | undefined;
    // ползунок
    range: HTMLElement | undefined;
    // контейнер инпута
    wrapper: any;
    // для перетаскивания ползунка, отслеживания событий мыши

    constructor(containerClass: any) {
      this.app = document.getElementById(containerClass)
      this.line = document.createElement('div');
      this.wrapper = document.createElement('div');
      this.range = document.createElement('div');

      this.wrapper?.classList.add('wrapper');
      this.app.appendChild(this.wrapper);
      this.range?.classList.add('range');
      this.line?.classList.add('line');
      this.wrapper?.appendChild(this.range);
      this.wrapper.appendChild(this.line);

      this.range?.addEventListener('mousedown', function() {
        this.draggable = true;
      })
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const input = new Input('app');
  })
}