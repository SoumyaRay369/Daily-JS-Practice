const submissions = [
  { name: 'Alice', age: '28', email: 'alice@example.com', subscribed: 'yes' },
  { name: 'Bob', age: 'N/A', email: '', subscribed: 'no' },
  { name: 'Charlie', age: '22', email: 'charlie@example.com', subscribed: 'yes' },
  { name: '', age: '30', email: 'ghost@example.com', subscribed: 'no' },
  { name: 'Dana', age: '', email: 'dana@example.com', subscribed: 'yes' }
];


// 🎯 Goal:
// Filter out entries that:

// Don’t have a name

// OR have no email

// Convert age from string to number — use null if not valid

// Convert subscribed: 'yes' | 'no' to boolean

const filteredSubmissions = submissions.filter(item => (item.name !== '')).filter(item => item.email !== '')
.map((entry, index) => {
    if(entry.age)  entry.age = Number(entry.age)
    else  entry.age = null
    if(entry.subscribed === 'yes') entry.subscribed = true
    else entry.subscribed = false
    return entry
})
// console.log(filteredSubmissions)


const surveyResponses = [
  { name: 'Alice', responses: { q1: 'yes', q2: 'no', q3: 'yes' } },
  { name: 'Bob', responses: { q1: 'no', q2: 'no', q3: 'yes' } },
  { name: 'Charlie', responses: { q1: 'yes', q2: 'yes', q3: 'yes' } },
  { name: 'Dana', responses: { q1: 'no', q2: 'yes', q3: 'no' } },
  { name: 'Eli', responses: { q1: 'yes', q2: 'yes', q3: 'no' } }
];


// Create a summary object that shows how many people answered 'yes' to each question.

const summaryObject = surveyResponses.reduce((acc, item) => {
    //just make the 2nd part iterable
    const entries = Object.entries(item.responses)
    entries.forEach(([question, answer]) => {
        if(answer === 'yes'){
            acc[question] = (acc[question] || 0) + 1
        }
        
    })
    return acc
}, {})

// console.log(summaryObject)

//converting summaryObject into a sorted iterable
const iterableSummary = Object.entries(summaryObject).sort((a, b) => b[1] - a[1])
// console.log(iterableSummary)



const feedback = [
  { name: 'Alice', ratings: { ui: 5, performance: 4, support: 5 } },
  { name: 'Bob', ratings: { ui: 3, performance: 4, support: 4 } },
  { name: 'Charlie', ratings: { ui: 4, performance: 5, support: 3 } },
  { name: 'Dana', ratings: { ui: 5, performance: 5, support: 5 } },
  { name: 'Eli', ratings: { ui: 4, performance: 4, support: 4 } }
];


// Create an object that shows the average rating per feature.

const averageRating = Object.entries(feedback.reduce((acc, item) => {
    const entries = Object.entries(item.ratings)
    entries.forEach(([feature, rating]) => {
        if(!acc[feature]) acc[feature] = []
        acc[feature].push(rating)
    })
    return acc
}, {}))
.map(([feature, ratingList]) => {
    const average = ratingList.reduce((acc, item) => {
        return acc + item
    }, 0) / ratingList.length
    return {
        feature, 
        average
    }
})

// console.log(averageRating)


// const newArray = ['a', 'b', 'a', 'a', 'b']

// console.log([...new Set(newArray)])

// const AnotherNewArray = [['a', 'b'], ['c', 'd']]
// console.log(AnotherNewArray.flat())
