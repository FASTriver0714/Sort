import taskManager, { createTask } from "./taskManager";
import { START, COMPARE, SWAP, SINGLE_ITEM_DONE, FINISH } from "./constants";

/*

  < TODO #1 >

  현재 파일의 2번 줄에 `SWAP` 상수는 사용되지 않고 있습니다.
  아래 버블 정렬 알고리즘 내용을 참고하여 적절히 적용해보세요.

  적절히 적용되었을 경우, 버블 정렬 알고리즘 시각화가 완성됩니다.

  < TODO #2 >

  아래 버블 정렬 알고리즘은 시간복잡도 측면에서
  최적화가 필요한 상황입니다.

  여러분께 최적화 작업을 부탁드리겠습니다.

 */

export default function bubbleSort(arr) {
  taskManager.add(createTask(START));

  for (let i = 0; i < arr.length; i++) {
    let sortedFlag = false;
    for (let j = 0; j < arr.length - 1; j++) {
      taskManager.add(createTask(COMPARE, j, j + 1));

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sortedFlag = true;

        taskManager.add(createTask(SWAP, j, j + 1));
      }
    }

    if (sortedFlag === false) {
      break;
    }

    taskManager.add(createTask(SINGLE_ITEM_DONE, arr.length - 1 - i));
  }

  taskManager.add(createTask(FINISH));

  return arr;
}
