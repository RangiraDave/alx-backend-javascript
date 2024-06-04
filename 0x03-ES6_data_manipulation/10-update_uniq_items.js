// Update the value of the key in a Map object.
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    // Iterate over the map and update the value of the key if it is equal to 1.
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  }
}
