
import { COMPARE, FINISH, SINGLE_ITEM_DONE, SWAP } from "./constants";
import taskManager, { createTask } from "./taskManager";

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      taskManager.add(createTask(COMPARE, j + 1, j));

      arr[j + 1] = arr[j];

      taskManager.add(createTask(SWAP, j + 1, j))


    }


    arr[i] = arr[i - 1];

    taskManager.add(createTask(SINGLE_ITEM_DONE, i));
  }

  taskManager.add(createTask(FINISH));

  return arr;
}
