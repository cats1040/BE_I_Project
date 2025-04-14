const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

let reviews = [
  {
    id: uuid(),
    username: "Alice",
    reviewTitle: "An Unforgettable Experience – A Deep Dive into the Story That Will Touch Your Heart and Keep You Engaged From Start to Finish, Highly Recommend It!",
    reviewText: "Just finished reading an absolutely captivating book that had me hooked from the very first page. The storyline is so well-crafted, and the characters are incredibly complex, each with their own journey that felt so real and relatable. The book explores a range of emotions and themes, from love and loss to personal growth and redemption. It made me laugh, cry, and reflect on my own life in ways I never expected. The pacing was perfect—slow enough to build tension but fast enough to keep me turning pages. The author’s writing style is beautiful, with such vivid descriptions that I felt as though I was living inside the story. If you're someone who enjoys deeply emotional, thought-provoking narratives, this book is a must-read. I can't recommend it enough to anyone looking for a transformative reading experience.",
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Mark",
    reviewTitle: "The Latest Technology Update Has Changed Everything – An In-Depth Review of the New Features and How They Will Revolutionize the Way We Use Our Devices",
    reviewText: "The latest tech update has completely transformed the way I interact with my device. The new features are not just incremental improvements, but revolutionary changes that make everything faster, smoother, and more intuitive. One of the highlights for me is the improved performance—it’s like my device is a completely new machine. Apps load faster, multitasking is smoother, and everything feels more responsive. There are also some incredibly useful new tools and functionalities, like enhanced AI capabilities and more customizable settings, which I didn’t know I needed until I tried them. I also love the aesthetic changes that have been made, such as new themes and better integration with other devices. Overall, this update has raised the bar for what we can expect from future tech advancements. If you haven’t updated yet, you’re missing out on a truly game-changing experience.",
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Sophia",
    reviewTitle: "Looking for the Best Hiking Trails – Seeking Scenic, Safe, and Peaceful Locations for a Weekend Hike to Enjoy Nature and Reconnect with the Outdoors",
    reviewText: "Hey everyone, I’m in search of the perfect hiking spot for this weekend! I’ve been wanting to get out of the city for a while now and experience some peace and quiet in nature. I’m looking for trails that aren’t too crowded, so I can really immerse myself in the outdoors. Ideally, I would like to find a spot that is relatively easy for beginners but still offers breathtaking views and a bit of a challenge. I’m also concerned about safety—preferably areas that are well-marked and not too remote, in case anything goes wrong. I’ve heard about a few places, but I’d love to hear your personal recommendations. Bonus points if the trail is known for its wildlife or scenic views, as I love to photograph nature. Any tips on what to pack for a solo hike would also be appreciated!",
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Daniel",
    reviewTitle: "A New Coffee Shop in Town That’s Quickly Gaining Popularity – Discovering the Best Espresso and Cozy Atmosphere That Will Make You Feel Right at Home",
    reviewText: "I recently stumbled upon a new coffee shop in town and, let me tell you, it’s a total game-changer. The moment I walked in, I was immediately drawn to the cozy ambiance—soft lighting, comfy chairs, and a modern yet welcoming design. But the real highlight is the coffee. Their espresso is nothing short of amazing. Rich, smooth, and perfectly balanced, it’s easily one of the best cups I’ve had in a long time. I also tried a few of their baked goods, which were absolutely delicious—flaky, fresh, and paired perfectly with my drink. The staff is incredibly friendly, and the owner even came over to chat for a bit, which made me feel like part of the community. I’ve been back a few times already and will definitely keep coming for my daily coffee fix. Highly recommend you check it out!",
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Jessica",
    reviewTitle: "My Fitness Journey Begins Today – A Detailed Reflection on the First Step Toward a Healthier Lifestyle and What I’m Expecting to Achieve Over the Coming Weeks and Months",
    reviewText: "Today marks the official start of my fitness journey, and I’m feeling so motivated! It’s been a long time coming, and I’m excited to finally take the plunge into healthier living. I’ve always been someone who wanted to be more active but found it difficult to stay consistent. But now, I’m committing to making fitness a priority in my life. I’m starting with a mix of cardio, strength training, and flexibility exercises, aiming to build endurance, tone my muscles, and increase my overall energy levels. The first workout was definitely challenging, but it felt amazing to push through and finish strong. I’m looking forward to tracking my progress and celebrating the small victories along the way. I also plan to incorporate healthier eating habits and focus on self-care throughout this process. I know it’s going to be a tough journey, but I’m ready for the challenge and can’t wait to see the results!",
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Liam",
    reviewTitle: "A Must-Watch Movie That Will Leave You Speechless – An In-Depth Review of the Plot, Characters, and Cinematic Mastery That Makes This Film a True Classic",
    reviewText: "I just watched a new movie, and I have to say, it’s one of the best films I’ve seen in years. From start to finish, the film keeps you on the edge of your seat, with an unpredictable plot, jaw-dropping twists, and unforgettable characters. The director really outdid themselves, creating a visual masterpiece that’s both aesthetically stunning and emotionally powerful. The acting was top-notch, with every character bringing something unique and compelling to the story. The movie also explored complex themes of love, loss, and redemption in a way that felt raw and real. There were moments that made me laugh, cry, and even gasp in shock—every emotion was perfectly captured. If you’re looking for a film that challenges your perceptions and takes you on an emotional journey, this is the one to watch. I can’t recommend it highly enough. It’s already a classic in my book.",
    date: "2025-04-14",
    replies: [],
  }
];

app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.post("/reviews", (req, res) => {
  const { username, reviewText, reviewTitle } = req.body;

  reviews.push({username, reviewText, reviewTitle, id: uuid(), replies: [], date: new Date()});
  
  console.log(reviews)

  res.redirect("http://localhost:3000/reviews");
});

app.get("/reviews/:id", (req, res) => {
  const { id } = req.params;
  const review = reviews.find((c) => c.id === id);
  res.send(review);
});

app.patch("/reviews/:id", (req, res) => { 
  const { id } = req.params;
  const { reviewText, reviewTitle } = req.body;
  const foundReview = reviews.find((c) => c.id === id);
  foundReview.reviewText = reviewText;
  foundReview.reviewTitle = reviewTitle;
  foundReview.date = new Date();

  res.redirect("http://localhost:3000/reviews");
});

app.delete("/reviews/:id", (req, res) => {
  const { id } = req.params;
  reviews = reviews.filter((c) => c.id !== id);
  res.redirect("http://localhost:3000/reviews");
});

app.listen(8080, () => {
  console.log("ON PORT 8080!");
});

/*

-- PATTERN-- (not standard)
GET /comments - list all comments
POST /comments - create a new comment
GET /comments/:id - get one comment using ID
PATCH /comments/:id - update one comment
DELETE /comments/:id - destroy one comment 
*/

