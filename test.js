const { processConcurrency } = require(".");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const processAccount = async (account, idx) => {
  console.log(`Processing account: ${account} - ${idx}`);
  const timeToProcess = Math.floor(Math.random() * 5000) + 1000; // 1-6 giây
  await delay(timeToProcess);
  console.log(
    `Finished processing account: ${account} in ${timeToProcess} ms - - ${idx}`
  );
};

processConcurrency({
  items: [1, 2, 3, 4, 5],
  func: (item, idx) => processAccount(item, idx),
  concurrency: 2
});
