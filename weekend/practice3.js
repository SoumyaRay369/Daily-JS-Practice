const names = ["Alice", "Bob", "Charlie", "David", "Amanda", "Brian"];

// Group names by their first letter:

// {
//   A: ["Alice", "Amanda"],
//   B: ["Bob", "Brian"],
//   C: ["Charlie"],
//   D: ["David"]
// }

const groupedNames = names.reduce((acc, item) => {
    const firstLetter = item.charAt(0)
    if(!acc[firstLetter]) acc[firstLetter] = []
    acc[firstLetter].push(item)
    return acc
}, {})

console.log(groupedNames)