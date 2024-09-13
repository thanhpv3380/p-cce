const processConcurrency = async ({ items, func, concurrency = 1 }) => {
  if (!items || items.length === 0 || !func) return;

  let queue = [];
  for (const item of items) {
    queue.push(item);
  }

  const activeWorkers = new Set();
  let itemIdx = 0;

  const processTask = () => {
    if (queue.length === 0 || activeWorkers.size === concurrency) return;

    const item = queue.shift();
    const workerPromise = func(item, itemIdx++).then(() => {
      activeWorkers.delete(workerPromise);
      processTask();
    });

    activeWorkers.add(workerPromise);
    processTask();
  };

  processTask();

  while (activeWorkers.size > 0) {
    await Promise.race(activeWorkers);
  }
};

module.exports = { processConcurrency };
