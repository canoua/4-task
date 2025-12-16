import { Slider } from "./slider/index.";

export class Panel{
  slider: Slider | any;
  app: HTMLElement | null ;
  title: any;
  container: any;
  inputStep: any;
  inputWidth: any;
  inputMin: any;

  constructor() {
    this.app = document.getElementById('app');
    console.log(this.slider.app);
    
    this.container = document.createElement('div');
    this.container.classList.add('panel-container');
    this.title = document.createElement('h1');
    this.title.textContent = 'Панель для управления ползунком';
    this.app.appendChild(this.container);
    this.container.appendChild(this.title);

    this.createInput(this.container, 'input', 'input', 'step')
    this.createInput(this.container, 'input', 'input', 'step')
  }

  createInput(parent?: any, element?: any, name?: string, placeholder?: string, className?: string) {
    element = document.createElement('input');
    element.setAttribute('type', 'text');
    element.setAttribute('name', name); 
    element.setAttribute('placeholder', placeholder);                                 
    element.classList.add(className);
    parent.appendChild(element);
  }
}