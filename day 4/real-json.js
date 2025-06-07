const comments = [
  { id: 1, user: 'Alice', postId: 101, content: 'Great post!', flagged: false },
  { id: 2, user: 'Bob', postId: 102, content: 'Spam link here', flagged: true },
  { id: 3, user: 'Alice', postId: 101, content: 'Thanks for replying!', flagged: false },
  { id: 4, user: 'Charlie', postId: 103, content: 'Interesting read', flagged: false },
  { id: 5, user: 'Bob', postId: 101, content: 'Visit my website!!', flagged: true },
  { id: 6, user: 'Alice', postId: 102, content: 'Could you explain more?', flagged: false },
  { id: 7, user: 'Charlie', postId: 102, content: 'Reported!', flagged: true }
];


// //Group all comments per postId

// For each post:

// Total number of comments

// Number of flagged comments

// List of unique commenters

const groupedComments = Object.entries(comments.reduce((acc, item) => {
    const {postId, content, flagged, user} = item
    if(!acc[postId]) acc[postId] = []
    acc[postId].push({content, flagged, user})
    return acc
}, {}))
.map(([postId, listOfObjects]) => {
    const numberOfComments = listOfObjects.length
    const numberOfFlaggedComments = listOfObjects.reduce((acc, item) => {
        if(item.flagged === true)   acc = acc + 1
        return acc
    }, 0)
    const listOfUniqueCommenters = [...new Set(listOfObjects.map(item => item.user))]
    return {
        postId, 
        numberOfComments, 
        numberOfFlaggedComments,
        listOfUniqueCommenters
    }
})

// console.log(groupedComments)


const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 35 },
  { id: 3, name: 'Charlie', age: 22 }
];


const orders = [
  { id: 101, userId: 1, total: 250 },
  { id: 102, userId: 2, total: 100 },
  { id: 103, userId: 1, total: 400 },
  { id: 104, userId: 3, total: 150 },
  { id: 105, userId: 1, total: 100 }
];

//Merge User data and Order data

const userLookUp = Object.fromEntries(users.map(user => [user.id, user]))
console.log(userLookUp)
const groupedOrders = Object.entries(orders.reduce((acc, item) => {
    const {userId, total} = item
    if(!acc[userId]) acc[userId] = []
    acc[userId].push(total)
    return acc
}, {}))
.map(([id, listOfTotals]) => {
    //why can't I simply insert a map in this line to map "id" with the id of users?
    const user = userLookUp[Number(id)]
    const orderCount = listOfTotals.length
    const totalSpent = listOfTotals.reduce((acc, item) => {
        acc = acc + item
        return acc
    }, 0)
    return {
        name: user.name,
        age: user.age,
        id, 
        orderCount,
        totalSpent
    }

})

// console.log(groupedOrders)




//Final drill:

//backend response
const rawSettings = {
  theme: 'dark',
  notifications: 'enabled',
  location: 'enabled',
  analytics: 'disabled',
  ads: 'disabled'
};


// 🎯 Goal:
// Convert this object into an array of [key, value] pairs

// Filter out all settings where the value is 'disabled'

// Convert it back into an object

const keyValueRawSettings = Object.entries(rawSettings).filter((item) => item[1] !== 'disabled')
const keyValueRawSettingsBackToObject = Object.fromEntries(keyValueRawSettings)
console.log(keyValueRawSettings)
console.log(keyValueRawSettingsBackToObject)