const feedback = [
  { user: "A", ratings: { ui: 4, performance: 5, support: 3 } },
  { user: "B", ratings: { ui: 5, performance: 4, support: 4 } },
  { user: "C", ratings: { ui: 3, performance: 3, support: 5 } },
];


//Use .reduce() and Object.entries() to create an object like:
// {
//   ui: 4,
//   performance: 4,
//   support: 4
// }
// (Average of each category rounded down.)


const reducedFeedback = Object.entries(feedback.reduce((acc, item) => {
    const {ratings} = item
    Object.entries(ratings).forEach(([item, value]) => {
        if(!acc[item]) acc[item] = []
        acc[item].push(value)
    })
    return acc
}, {}))
.map(([feature, ratingList]) => {
    const averagePerFeature = ratingList.reduce((acc, item) => {
        acc = (acc + item)
        return acc
    }, 0)/ratingList.length
    return {
        feature, 
        averagePerFeature
    }
})

console.log(reducedFeedback)

// const reducedFeedback = feedback.map((item) => {
//     const {ratings} = item
//     return Object.entries(ratings)
// })
// console.log(reducedFeedback)