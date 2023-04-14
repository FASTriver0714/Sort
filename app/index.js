import "../assets/styles/index.less";

import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import view from "./view";
import taskManager from "./taskManager";
import { START, COMPARE, SWAP, SINGLE_ITEM_DONE, FINISH } from "./constants";
import { wait } from "./utils";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("form input");
const selectElement = document.querySelector("form select");

let userInput = "";
let selectedAlgorithm = "bubble";

inputElement.addEventListener("change", function (ev) {
  userInput = ev.target.value;
});

selectElement.addEventListener("change", function (ev) {
  selectedAlgorithm = ev.target.value;
});

formElement.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const numbers = userInput.split(",").map((num) => Number(num.trim()));


  if (Number.isNaN(numbers)) {
    alert("숫자만 입력할 수 있습니다.")
    return;
  }


  if (numbers.length < 5 || numbers.length > 10){
    alert("숫자는 최소 5개, 최대 10개까지 입력할 수 있습니다.")
    return;
  }

  view.drawNumbers(numbers);

  if (selectedAlgorithm === "bubble") {
    bubbleSort(numbers);
  } else if (selectedAlgorithm === "insertion") {
    insertionSort(numbers);
  } else {
    return alert("Invalid Sorting Algorithm.");
  }

  visualizeStep();
});

async function visualizeStep() {
  const currentTask = taskManager.getFirst();

  if (!currentTask) return;

  await processVisualizationTask(currentTask);

  visualizeStep();
}

async function processVisualizationTask(task) {
  await wait();

  if (task.type === START) {
    await view.changeBackgroundColor();
  } else if (task.type === COMPARE) {
    await view.compareListItems(task.sourceIndex, task.targetIndex);
  } else if (task.type === SWAP) {
    await view.swapListItems(task.sourceIndex, task.targetIndex);
  } else if (task.type === SINGLE_ITEM_DONE) {
    await view.markDone(task.sourceIndex);
  } else if (task.type === FINISH) {
    await view.finishVisualization();
  }
}
