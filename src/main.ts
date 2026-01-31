import { Slider } from './components/slider/index..ts'
import { Panel } from './components/panel.ts';
import './style.css'

document.addEventListener('DOMContentLoaded', function() {
  const slider = new Slider(50, 75, 1);
  const panel = new Panel();
})