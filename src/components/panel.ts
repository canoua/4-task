import { Slider } from "./slider/index.";

export class Panel{
  slider: Slider | any;
  app: HTMLElement | null;
  title: any;
  container: any;
  inputStep: any;
  inputWidth: any;
  inputMin: any;
  button: HTMLElement | null;

  constructor() {
    this.app = document.getElementById('app');
    
    this.container = document.createElement('div');
    this.container.classList.add('panel-container');
    this.title = document.createElement('h1');
    this.button = document.createElement('button');
    this.button.textContent = 'ввод';

    // let getMessage = this.addValues('hello')
    this.button.addEventListener('click', () => this.getValues(this.container.children.input.value));
    this.title.textContent = 'Панель для управления ползунком';
    this.app.appendChild(this.container);

    this.container.appendChild(this.title);
    this.container.appendChild(this.button);
    this.createInput(this.container, 'input', 'input', 'step')
    // this.createInput(this.container, 'input', 'input', 'step')
  }

  createInput(parent?: any, element?: any, name?: string, placeholder?: string, className?: string) {
    element = document.createElement('input');
    element.setAttribute('type', 'text');
    element.setAttribute('name', name); 
    element.setAttribute('placeholder', placeholder);                                 
    element.classList.add(className);
    parent.appendChild(element);
  }


  getValues(element: any) {
    console.log(element);
    this.container.children.input.value = '';
  }
}