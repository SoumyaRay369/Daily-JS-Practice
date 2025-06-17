const feedback = [
  {
    username: "alice",
    category: "music",
    ratings: { ui: 4, performance: 5, support: 3 }
  },
  {
    username: "bob",
    category: "music",
    ratings: { ui: 3, performance: 4, support: 4 }
  },
  {
    username: "claire",
    category: "video",
    ratings: { ui: 5, performance: 4, support: 5 }
  },
  {
    username: "dan",
    category: "video",
    ratings: { ui: 2, performance: 3, support: 4 }
  },
  {
    username: "ellen",
    category: "gaming",
    ratings: { ui: 4, performance: 5, support: 5 }
  }
];


// 🧠 Your Task:
// Use .reduce() to group all ratings by category.

// Then for each category, calculate the average rating for each metric (ui, performance, support).

// Return a final object in the following format:

// {
//   music: { ui: 3.5, performance: 4.5, support: 3.5 },
//   video: { ui: 3.5, performance: 3.5, support: 4.5 },
//   gaming: { ui: 4.0, performance: 5.0, support: 5.0 }
// }

const groupedFeeback = Object.entries(feedback.reduce((acc, item) => {
    const {category, ratings} = item
    if(!acc[category]) acc[category] = []
    acc[category].push(ratings)
    return acc
}, {}))
.map(([category, listOfMetrics]) => {
    const metrics =  Object.entries(listOfMetrics)
    metrics.map((listOfObjects) => {
        
    })
    return {
        category,
        metrics
    }
})

console.log(groupedFeeback)