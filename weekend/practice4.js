const movies = [
  { title: "Inception", ratings: [5, 4, 5] },
  { title: "Interstellar", ratings: [5, 5, 5] },
  { title: "Tenet", ratings: [3, 4, 4] },
];


// Sort the array by average rating (highest first) using .sort() and .reduce().
// [
//   { title: "Interstellar", ... },
//   { title: "Inception", ... },
//   { title: "Tenet", ... }
// ]

const sortedAverage =  movies.map((item) => {
  const {ratings, title} = item
  const averageRating = ratings.reduce((acc, item) => {
    acc = acc + item
    return acc
  }, 0)/ ratings.length
  
  return {
    title, 
    averageRating
  }
}).sort((a, b) => b.averageRating - a.averageRating)
console.log(sortedAverage)