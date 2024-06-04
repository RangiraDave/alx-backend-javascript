// Function that takes two arguments; set and startString.
// It then returns a new set with all values removed the part matching the 'startString'.
export default function cleanSet(set, startString) {
    // If the set is not an instance of Set, return an empty set.
    if (!(set instanceof Set)) {
        return new Set();
    }
    
    // If the startString is not a string, return the set.
    if (typeof startString !== 'string') {
        return set;
    }
    
    // Return a new set with all values removed the part matching the 'startString'.
    return new Set([...set].filter((value) => !value.startsWith(startString)));
}
