let count = 10;

async function addCount(amount = 1) {
  count += amount;
}
async function minusCount(amount = 1) {
  count -= amount;
}
async function getCount() {
  return count;
}

export default {
  addCount,
  minusCount,
  getCount,
};
