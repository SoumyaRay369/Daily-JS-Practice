const articles = [
  { title: "JS Tips", tags: ["javascript", "web", "tips"] },
  { title: "React Guide", tags: ["react", "javascript", "web"] },
  { title: "CSS Tricks", tags: ["css", "design", "web"] },
];


//  Use .flatMap() and .reduce() to get an object showing how many times each tag appears:

const tagCount = articles.reduce((acc, item) => {
    const {tags} = item
    tags.forEach((element) => {
        acc[element] = (acc[element] || 0) + 1
    })
    return acc
}, {})

console.log(tagCount)