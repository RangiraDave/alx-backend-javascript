export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // Increment the number of queries to the passed endpoint
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  }
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}
