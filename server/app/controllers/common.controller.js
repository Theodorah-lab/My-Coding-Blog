const users =  [
  {
    "id": 1,
    "name": "Theo",
    "username": "Theo",
    "email": "rikhotsotheodora@gmail.com"
  },


]

let posts =  [
  {
    "id": 1,
    "title": "Why Melsoft Academy Bootcamp.?",
    "body": "Before enrolling in the bootcamp, I had a burning desire to upskill in the field of technology. Melsoft Academy stood out as the ideal choice due to its reputation for quality education, experienced instructors, and a curriculum tailored to industry demands....",
    "userId": 1,
    "date": "2023-03-04T13:25:05.437Z"
  },
  {
    "id": 2,
    "title": "The Curriculum and Learning Experience",
    "body": "One of the things that immediately struck me about Melsoft Academy Bootcamp was the well-structured curriculum. Covering a wide range of topics, from programming languages to web development frameworks, the syllabus was both comprehensive and up-to-date with industry trends. The daily schedule was intense but well-organized, balancing theory with hands-on practice. ...",
    "userId": 2,
    "date": "2023-04-13T23:52:23.4372"
  },
  {
    "id": 3,
    "title": "Projects That Shaped My Skillss",
    "body": "One of the highlights of the bootcamp was the opportunity to work on real-world projects. These projects pushed me out of my comfort zone and allowed me to apply the knowledge I had gained. From building web applications to tackling complex coding challenges, the projects were the ultimate test of our skills....",
    "userId": 3,
    "date": "2023-06-25T15:33.4372"
  },
  {
    "id": 4,
    "title": "Challenges and Growth",
    "body": "It wasn't all  smooth sailing. There were moments of frustration, sleepless ....",
    "userId": 4,
    "date": "2023-08-26T00:01.4372"
  }
]

// Create a new post
exports.create = (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body,
    userId: req.body.userId,
    date: req.body.date,
    reactions: req.body.reactions
  };
  posts.push(post);
  res.send();
};

// Find all posts
exports.findAll = (req, res) => {
  res.send(posts); 
};

// Update a post by ID
exports.update = (req, res) => {
  const id = req.params.id;
  const allPosts = posts.map(post => post);
  const index = allPosts.findIndex(post => post.id === parseInt(id));
  // Update the properties of the post with the specified ID
  allPosts[index].title = req.body.title;
  allPosts[index].body = req.body.body;
  allPosts[index].userId = req.body.userId;
  allPosts[index].date = req.body.date;
  posts = allPosts.map(post => post); 
  res.send();
};

// Delete a post by ID
exports.delete = (req, res) => {
  const id = req.params.id;
  const index = posts.findIndex(post => post.id === id);
  posts.splice(index, 1); 
  res.send(); 
};

// Update reactions for a post by ID
exports.reactions = (req, res) => {
  const id = req.params.id;
  const allPosts = posts.map(post => post);
  const index = allPosts.findIndex(post => post.id === parseInt(id));
  allPosts[index].reactions = req.body.reactions;
  posts = allPosts.map(post => post);
  res.send();
};

// Get all users
exports.users = (req, res) => {
  res.send(users); 
};

// Find posts by a specific user ID
exports.postsFindByUserId = (req, res) => {
  const id = req.query.userId;
  res.send(posts.filter(post => post.userId === parseInt(id))); 
};
