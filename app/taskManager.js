const queue = [];

const taskManager = {
  add(data) {
    queue.push(data);
  },
  getFirst() {
    return queue.shift();
  },
  getAll() {
    return queue;
  },
};

export const createTask = (type, sourceIndex, targetIndex) => ({
  type,
  sourceIndex,
  targetIndex,
});

export default taskManager;
