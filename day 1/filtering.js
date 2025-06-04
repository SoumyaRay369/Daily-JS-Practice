const users = [
  { id: 1, name: 'Alice', age: 22, isActive: true },
  { id: 2, name: 'Bob', age: 35, isActive: false },
  { id: 3, name: 'Charlie', age: 28, isActive: true },
  { id: 4, name: 'David', age: 19, isActive: false },
  { id: 5, name: 'Eva', age: 31, isActive: true }
]



//Use .filter() to get only active users

const activeUsers = users.filter((user) => user.isActive == true)
console.log(activeUsers)

//Use .map() to return an array of usernames only

const userNames = users.map((entry, idx) => {
  console.log(entry.name)
  return entry.name
})

console.log(userNames)


//Chain .map() and .filter() to get names of active users only

const activeUserNames = users.filter((user) => user.isActive == true).map((entry, index) => {
    return entry.name
})

console.log({activeUserNames: activeUserNames})


//Add new property 'status' == 'minor' if age < 25 else 'adult'


const newUsers = users.map((entry, index) => (
  {
    ...entry,
    status: entry.age < 25 ? 'minor' : 'adult'
  }
))

console.log(newUsers)


//Add a summary string

const summaryString = users.map((entry) => {
   return `${entry.name} of age (${entry.age}) is ${entry.isActive ? 'active' : 'inactive'}`
}).join(', ')

console.log(summaryString)