const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.body;

// ============ Генератор случайных чисел в пределах количества элементов массива ================
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ============ Селектор кнопки старт ================
const startBtn = document.querySelector(
  'button[data-action="start"]'
);
// ============ Селектор кнопки стоп ================
const stopBtn = document.querySelector(
  'button[data-action="stop"]'
);

// ============ Переменная для таймера ================
let timerId = null;

// ============ Опционально можно сначала сделать кнопку стоп неактивной!!! ================
stopBtn.disabled = true;

// При клике на Старт, запустим интервал,
// будем каждую секунду менять значение background-color инлайн стиля body,
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    startBtn.disabled = true;
    stopBtn.disabled = false;
    console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
  }, 1000);
});

// По клику на Стоп вызовем clearInterval и передадим
// аргументом ID того счетчика который надо остановить
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
    stopBtn.disabled = true;
});
