const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
const morgan = require("morgan");
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

let comments = [
  {
    id: uuid(),
    username: "Alice",
    comment: "Just finished reading an amazing book! Highly recommend it.",
    replies: [],
  },
  {
    id: uuid(),
    username: "Mark",
    comment: "The latest tech update is mind-blowing! Can't wait to try it.",
    replies: [],
  },
  {
    id: uuid(),
    username: "Sophia",
    comment: "Anyone knows a good place for weekend hiking?",
    replies: [],
  },
  {
    id: uuid(),
    username: "Daniel",
    comment: "Loving the new coffee shop in town. Their espresso is top-notch!",
    replies: [],
  },
  {
    id: uuid(),
    username: "Jessica",
    comment: "Finally started my fitness journey! Feeling great already.",
    replies: [],
  },
  {
    id: uuid(),
    username: "Liam",
    comment: "The new movie was amazing! Totally worth watching.",
    replies: [],
  },
  {
    id: uuid(),
    username: "Olivia",
    comment: "Does anyone have tips for learning a new language quickly?",
    replies: [],
  },
  {
    id: uuid(),
    username: "Ethan",
    comment: "Crypto market is crazy these days. What are your thoughts?",
    replies: [],
  },
  {
    id: uuid(),
    username: "Emma",
    comment: "Trying to find a reliable laptop for programming. Suggestions?",
    replies: [],
  },
  {
    id: uuid(),
    username: "Ryan",
    comment: "This weather is perfect for a road trip!",
    replies: [],
  },
  {
    id: uuid(),
    username: "Ava",
    comment:
      "Looking for new music recommendations. What are you listening to?",
    replies: [],
  },
  {
    id: uuid(),
    username: "Noah",
    comment: "Started learning React today. Excited for the journey!",
    replies: [],
  },
  {
    id: uuid(),
    username: "Isabella",
    comment: "Baked my first cake today, and it actually turned out great!",
    replies: [],
  },
  {
    id: uuid(),
    username: "Lucas",
    comment: "Looking forward to the upcoming football season!",
    replies: [],
  },
  {
    id: uuid(),
    username: "Mia",
    comment: "Planning a solo trip next month. Any tips?",
    replies: [],
  },
  {
    id: uuid(),
    username: "James",
    comment: "The latest smartphone release is impressive! Thoughts?",
    replies: [],
  },
  {
    id: uuid(),
    username: "Ella",
    comment: "Finally started meal prepping! Hoping to stay consistent.",
    replies: [],
  },
  {
    id: uuid(),
    username: "Benjamin",
    comment: "Excited for the upcoming gaming event this weekend!",
    replies: [],
  },
  {
    id: uuid(),
    username: "Harper",
    comment: "Working on a new art project. Can't wait to share it!",
    replies: [],
  },
  {
    id: uuid(),
    username: "William",
    comment: "Just got back from a trip. Travel really broadens the mind!",
    replies: [],
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

//
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);

  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});

/*

-- PATTERN-- (not standard)
GET /comments - list all comments
POST /comments - create a new comment
GET /comments/:id - get one comment using ID
PATCH /comments/:id - update one comment
DELETE /comments/:id - destroy one comment 

*/
