const tasks = [
  { id: 1, title: 'Fix bug', status: 'done', priority: 'high' },
  { id: 2, title: 'Add feature', status: 'in-progress', priority: 'medium' },
  { id: 3, title: 'Refactor code', status: 'done', priority: 'low' },
  { id: 4, title: 'Write docs', status: 'to-do', priority: 'low' },
  { id: 5, title: 'Test feature', status: 'done', priority: 'high' },
  { id: 6, title: 'Code cleanup', status: 'in-progress', priority: 'low' },
  { id: 7, title: 'Design UI', status: 'to-do', priority: 'high' }
];


//Group tasks by both status and priority

const groupStatusNPriority = tasks.reduce((acc, item) => {
    const {status, priority} = item
    if(!acc[status]) acc[status] = {}
    if(!acc[status][priority]) acc[status][priority] = []

    acc[status][priority].push(item.id)
    return acc
}, {})

// console.log(groupStatusNPriority)


const books = [
  { id: 1, title: '1984', genre: 'Dystopian', author: 'George Orwell' },
  { id: 2, title: 'Animal Farm', genre: 'Dystopian', author: 'George Orwell' },
  { id: 3, title: 'The Hobbit', genre: 'Fantasy', author: 'J.R.R. Tolkien' },
  { id: 4, title: 'The Lord of the Rings', genre: 'Fantasy', author: 'J.R.R. Tolkien' },
  { id: 5, title: 'A Brief History of Time', genre: 'Science', author: 'Stephen Hawking' },
  { id: 6, title: 'The Silmarillion', genre: 'Fantasy', author: 'J.R.R. Tolkien' },
  { id: 7, title: 'Homage to Catalonia', genre: 'Non-fiction', author: 'George Orwell' }
];


//Group books by genre and then by author

const groupGenreNAuthor = books.reduce((acc, item) => {
    const {genre, author} = item
    if(!acc[genre]) acc[genre] = {}
    if(!acc[genre][author]) acc[genre][author] = []
    acc[genre][author].push(item.id)
    return acc
}, {})

// console.log(groupGenreNAuthor)


//Flatten all high-priority task titles

const flattenHighPriority = tasks.filter((item) => item.priority === 'high').map((entry, index) => entry.title)
// console.log(flattenHighPriority)

//Doing the above using flatMap()

const flatMapTrial = tasks.flatMap(item => 
    item.priority === 'high' ? [item.title] : []
)
// console.log(flatMapTrial)



//Count tasks by (status + priority) combinations

const statusNPriorityCount = Object.entries(tasks.reduce((acc, item) => {
    const {status, priority} = item
    if(!acc[status]) acc[status] = {}
    if(!acc[status][priority]) acc[status][priority] = []
    acc[status][priority].push(item.id)
    return acc
}, {})).map(([status, priorities]) => {
    return Object.entries(priorities).flatMap(([priority, list]) => ({
        status, 
        priority, 
        count: list.length
    }))
})

// console.log(statusNPriorityCount)


const reviews = [
  { id: 1, user: 'Alice', movie: 'Inception', rating: 5 },
  { id: 2, user: 'Bob', movie: 'Inception', rating: 4 },
  { id: 3, user: 'Alice', movie: 'Interstellar', rating: 5 },
  { id: 4, user: 'Charlie', movie: 'Inception', rating: 3 },
  { id: 5, user: 'Bob', movie: 'Interstellar', rating: 4 },
  { id: 6, user: 'Alice', movie: 'Dunkirk', rating: 4 },
  { id: 7, user: 'Charlie', movie: 'Dunkirk', rating: 2 },
  { id: 8, user: 'Bob', movie: 'Dunkirk', rating: 3 }
];


//Group reviews by movie and for each movie: calculate average rating and the list of users who reviwed it

const groupedByMovie = Object.entries(reviews.reduce((acc, item) => {
    const {user, movie, rating} = item
    if(!acc[movie]) acc[movie] = []
    
    acc[movie].push({rating, user})
    return acc
}, {}))
.map(([movie, listOfObjects]) => {
    const averageRating = listOfObjects.reduce((sum, item) => sum + item.rating, 0) / listOfObjects.length
    const reviewersList = listOfObjects.map((item) => item.user)
    return {
        movie,
        averageRating,
        reviewersList
    }
})
// console.log(groupedByMovie)





const posts = [
  { id: 1, author: 'Alice', tags: ['react', 'js'] },
  { id: 2, author: 'Bob', tags: ['js', 'css'] },
  { id: 3, author: 'Alice', tags: ['node', 'js'] },
  { id: 4, author: 'Charlie', tags: ['react', 'node'] },
  { id: 5, author: 'Bob', tags: ['css', 'html'] },
  { id: 6, author: 'Charlie', tags: ['react', 'js'] }
];


//Group all tags per author and show how many times each tag appeared for them

const groupedAuthorTags = Object.entries(posts.reduce((acc, item) => {
    const {author, tags} = item
    if(!acc[author]) acc[author] = []
    acc[author].push(tags)
    return acc
}, {}))
.map(([author, listOfTagLists]) => {
    const allTags = listOfTagLists.flat()
    const tagCounter = allTags.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1
        return acc
    }, {})
    return {
        author, 
        tagCounter
    }
})



console.log(groupedAuthorTags)
