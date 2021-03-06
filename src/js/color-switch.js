//Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
//Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

import { btnStart, btnStop} from './refs.js';
import { onColorSwitchStart, onColorSwitchStop } from './listeners.js';

btnStart.addEventListener('click', onColorSwitchStart);
btnStop.addEventListener('click', onColorSwitchStop);