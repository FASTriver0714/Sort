import { wait } from "./utils";

const numberListElement = document.querySelector("ul");

const view = {
  async changeBackgroundColor() {
    numberListElement.classList.add("focus");

    await wait();

    numberListElement.classList.remove("focus");
  },

  async compareListItems(sourceIndex, targetIndex) {
    const listElements = document.querySelectorAll("li");
    listElements[sourceIndex].classList.add("focus");
    listElements[targetIndex].classList.add("focus");

    await wait();

    listElements[sourceIndex].classList.remove("focus");
    listElements[targetIndex].classList.remove("focus");
  },

  async swapListItems(sourceIndex, targetIndex) {
    const listElements = document.querySelectorAll("li");
    listElements[sourceIndex].classList.add("dark");
    listElements[targetIndex].classList.add("dark");

    await wait();

    const temp = listElements[sourceIndex].textContent;
    listElements[sourceIndex].textContent =
      listElements[targetIndex].textContent;
    listElements[targetIndex].textContent = temp;

    listElements[sourceIndex].classList.remove("dark");
    listElements[targetIndex].classList.remove("dark");
  },

  markDone(index) {
    const listElements = document.querySelectorAll("li");
    listElements[index].classList.add("done");
  },

  finishVisualization() {
    numberListElement.classList.add("focus");
  },

  drawNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const list = document.createElement("li");
      list.textContent = numbers[i];
      numberListElement.appendChild(list);
    }
  },
};

export default view;
