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