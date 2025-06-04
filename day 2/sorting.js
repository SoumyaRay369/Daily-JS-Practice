const tasks = [
  { id: 1, title: 'Fix bug', status: 'done', priority: 'high' },
  { id: 2, title: 'Add feature', status: 'in-progress', priority: 'medium' },
  { id: 3, title: 'Refactor code', status: 'done', priority: 'low' },
  { id: 4, title: 'Write docs', status: 'to-do', priority: 'low' },
  { id: 5, title: 'Test feature', status: 'done', priority: 'high' }
];


//Use .reduce() to count how many tasks are there in each status

const statusCount = tasks.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1
    return acc
}, {})

// console.log(statusCount)

//Turn statusCount into an array of [key, value] pairs which is good for iteration and sorting
const statusEntries = Object.entries(statusCount)
// console.log(statusEntries)


//Sort by count(Descending)
const sortedCount = statusEntries.sort((a, b) => b[1] - a[1])
// console.log(sortedCount)


//Chaining it all
const summarySortedCount = Object.entries(tasks.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1
    return acc
}, {})).sort((a, b) => b[1] - a[1])

console.log(summarySortedCount)

//Get high priority task titles

const highPriority = tasks.filter(item => item.priority == 'high').map((item, index) => item.title)
console.log(highPriority)

