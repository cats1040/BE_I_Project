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
    reviewText: `Just finished reading an absolutely captivating book that had me hooked from the very first page. The storyline is so well-crafted, and the characters are incredibly complex, each with their own journey that felt so real and relatable. The book explores a range of emotions and themes, from love and loss to personal growth and redemption. 

It made me laugh, cry, and reflect on my own life in ways I never expected. The pacing was perfect—slow enough to build tension but fast enough to keep me turning pages. The author’s writing style is beautiful, with such vivid descriptions that I felt as though I was living inside the story.

What I especially appreciated were the character developments. The protagonist’s internal struggle and how it affected their relationships with others felt so relatable. I found myself rooting for them throughout the journey. The secondary characters also had their own arcs, and while not all of them were fully fleshed out, they added important layers to the narrative.

If you're someone who enjoys deeply emotional, thought-provoking narratives, this book is a must-read. I can't recommend it enough to anyone looking for a transformative reading experience.`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Mark",
    reviewTitle: "The Latest Technology Update Has Changed Everything – An In-Depth Review of the New Features and How They Will Revolutionize the Way We Use Our Devices",
    reviewText: `The latest tech update has completely transformed the way I interact with my device. The new features are not just incremental improvements, but revolutionary changes that make everything faster, smoother, and more intuitive.

One of the highlights for me is the improved performance—it’s like my device is a completely new machine. Apps load faster, multitasking is smoother, and everything feels more responsive. There are also some incredibly useful new tools and functionalities, like enhanced AI capabilities and more customizable settings, which I didn’t know I needed until I tried them.

The update also includes better integration with other devices I use, making my entire tech ecosystem feel seamless. I especially love the new AI assistant that can now predict what I want to do next based on my previous actions. It’s almost like having a personal assistant. There are also some amazing customization options that allow me to tailor my device to my specific preferences.

I also noticed a significant improvement in security with more robust encryption and a new privacy-focused browser. Overall, this update has raised the bar for what we can expect from future tech advancements. If you haven’t updated yet, you’re missing out on a truly game-changing experience. It’s not just about performance; it’s about making your digital life more connected, secure, and personalized.`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Sophia",
    reviewTitle: "Looking for the Best Hiking Trails – Seeking Scenic, Safe, and Peaceful Locations for a Weekend Hike to Enjoy Nature and Reconnect with the Outdoors",
    reviewText: `Hey everyone, I’m in search of the perfect hiking spot for this weekend! I’ve been wanting to get out of the city for a while now and experience some peace and quiet in nature. I’m looking for trails that aren’t too crowded, so I can really immerse myself in the outdoors.

Ideally, I would like to find a spot that is relatively easy for beginners but still offers breathtaking views and a bit of a challenge. I’ve always loved the idea of escaping to nature, but I’m also mindful of safety. I’m hoping to find trails that are well-marked, with clear signage and maps available. I don’t mind a little bit of elevation, but I want to avoid anything too strenuous, as I want to be able to enjoy the experience without feeling completely exhausted.

I’m also looking for trails that offer some variety—whether it’s scenic vistas, wildlife, or lush forests, I want to be able to enjoy a range of natural beauty. I’ve heard about a few places, but I’d love to hear your personal recommendations. It’s also important to me that the location has accessible amenities, like water stations and bathrooms, as I tend to hike alone and want to ensure I have everything I need.

Bonus points if the trail is known for its wildlife or scenic views, as I love to photograph nature. Any tips on what to pack for a solo hike would also be appreciated!`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Daniel",
    reviewTitle: "A New Coffee Shop in Town That’s Quickly Gaining Popularity – Discovering the Best Espresso and Cozy Atmosphere That Will Make You Feel Right at Home",
    reviewText: `I recently stumbled upon a new coffee shop in town and, let me tell you, it’s a total game-changer. The moment I walked in, I was immediately drawn to the cozy ambiance—soft lighting, comfy chairs, and a modern yet welcoming design. The smell of freshly ground coffee beans filled the air, and the space had a warm, inviting feel to it. 

But the real highlight is the coffee. Their espresso is nothing short of amazing. Rich, smooth, and perfectly balanced, it’s easily one of the best cups I’ve had in a long time. The texture of the espresso is silky, and the flavor has just the right amount of depth—bold but not overwhelming. I also tried a few of their baked goods, which were absolutely delicious—flaky, fresh, and paired perfectly with my drink. The croissant was buttery and melt-in-your-mouth, and the muffins were sweet without being overly sugary.

The staff is incredibly friendly, and the owner even came over to chat for a bit, which made me feel like part of the community. It’s clear they care about their craft and want to make every customer feel at home. I’ve been back a few times already and will definitely keep coming for my daily coffee fix. The cafe has become my new go-to spot for a quiet afternoon or a productive morning. Highly recommend you check it out if you’re in the area!`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Jessica",
    reviewTitle: "My Fitness Journey Begins Today – A Detailed Reflection on the First Step Toward a Healthier Lifestyle and What I’m Expecting to Achieve Over the Coming Weeks and Months",
    reviewText: `Today marks the official start of my fitness journey, and I’m feeling so motivated! It’s been a long time coming, and I’m excited to finally take the plunge into healthier living. I’ve always been someone who wanted to be more active but found it difficult to stay consistent. But now, I’m committing to making fitness a priority in my life.

I’m starting with a mix of cardio, strength training, and flexibility exercises, aiming to build endurance, tone my muscles, and increase my overall energy levels. The first workout was definitely challenging, but it felt amazing to push through and finish strong. I’m focused on building a routine that’s sustainable—one that will allow me to gradually progress without burning out. I’ve also been adjusting my diet to include more protein and whole foods to support my workouts.

So far, I’ve noticed that I have more energy throughout the day, and I’m excited to see where this journey takes me. I know it won’t always be easy, but I’m committed to sticking with it. I’m also setting small, achievable goals along the way, whether it’s hitting a personal best in weightlifting or completing a certain number of steps each day. In the coming weeks, I’m looking forward to building strength, improving my flexibility, and feeling more confident in my body. I also plan to incorporate healthier eating habits and focus on self-care throughout this process.

I know it’s going to be a tough journey, but I’m ready for the challenge and can’t wait to see the results!`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Liam",
    reviewTitle: "A Must-Watch Movie That Will Leave You Speechless – An In-Depth Review of the Plot, Characters, and Cinematic Mastery That Makes This Film a True Classic",
    reviewText: `I just watched a new movie, and I have to say, it’s one of the best films I’ve seen in years. From start to finish, the film keeps you on the edge of your seat, with an unpredictable plot, jaw-dropping twists, and unforgettable characters.

The director really outdid themselves, creating a visual masterpiece that’s both aesthetically stunning and emotionally powerful. Every frame felt like it was meticulously crafted, with cinematography that made each scene feel immersive. The acting was top-notch, with every character bringing something unique and compelling to the story.

The movie delves deep into the human condition, exploring themes like identity, betrayal, and redemption in a way that feels raw and real. There were moments that made me laugh, cry, and even gasp in shock—every emotion was perfectly captured. What stood out to me most, though, was how the film was able to seamlessly weave together multiple storylines, each one adding depth and complexity to the main narrative.

The ending was both shocking and thought-provoking, leaving me thinking about the film long after it was over. If you’re looking for a film that challenges your perceptions and takes you on an emotional journey, this is the one to watch. I can’t recommend it highly enough. It’s already a classic in my book.`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "Emma",
    reviewTitle: "Delicious Homemade Recipes That Bring Comfort and Joy – Sharing My Favorite Go-To Meals That Everyone Should Try at Least Once",
    reviewText: `Cooking has always been a passion of mine, and recently I’ve been experimenting with a few new recipes that turned out to be absolute hits! One of my favorites is a creamy mushroom risotto that’s rich in flavor and perfect for cozy dinners. The texture of the rice is perfectly creamy, and the earthy mushrooms add a lovely depth of flavor. 

Another go-to is my signature veggie stir-fry with a tangy homemade sauce—super quick and packed with vibrant colors and flavors. It’s a perfect weeknight meal when I don’t have much time to cook, but still want something nutritious and satisfying. I love to serve it with brown rice to add some extra fiber.

I’ve also been baking a lot of homemade bread recently, and there’s nothing quite like the smell of freshly baked bread filling the house. My sourdough bread has been a particular favorite, with its crispy crust and soft, airy interior. It’s perfect for sandwiches or just enjoying with a bit of butter and jam.

Cooking these meals has not only been a great way to nourish myself and my family, but it’s also been a fantastic way to unwind and de-stress. There’s something so comforting about preparing a meal from scratch, and the process itself brings me so much joy. I can’t wait to try even more recipes and share them with everyone.`,
    date: "2025-04-14",
    replies: [],
  },
  {
    id: uuid(),
    username: "James",
    reviewTitle: "How Learning an Instrument Changed My Life – A Personal Reflection on the Benefits of Playing Music and How It Has Helped Me Grow",
    reviewText: `Learning to play the guitar has been one of the most rewarding experiences of my life. It’s not just about the music, though—it’s about the process of learning, the challenges, and the satisfaction of improving bit by bit. When I first picked up the guitar, I struggled with basic chords and finger placement, but over time, things started to click. 

The journey has taught me so much about patience, persistence, and discipline. Every time I mastered a new song or learned a more complex technique, it gave me a sense of accomplishment. But more than that, it’s helped me grow as a person. It’s given me a creative outlet, a way to express myself when words aren’t enough. It’s also become a great way to connect with others, whether it’s through jam sessions with friends or joining online communities of musicians who share tips, support, and inspiration.

I still have a long way to go, but I’m enjoying every step of the process. My goal for the next few months is to get comfortable with barre chords and learn how to play more advanced songs. I highly recommend picking up a musical instrument if you’ve ever considered it. It’s an incredible outlet for creativity and expression.`,
    date: "2025-04-14",
    replies: [],
  },
];

let users = [
  {
    email: "alice@gmail.com", 
    username: "Alice",
    password: "1234",
  },
  {
    email: "mark@gmail.com", 
    username: "Mark",
    password: "1234",
  },
  {
    email: "sophia@gmail.com", 
    username: "Sophia",
    password: "1234",
  },
  {
    email: "daniel@gmail.com", 
    username: "Daniel",
    password: "1234",
  },
  {
    email: "jessica@gmail.com", 
    username: "Alice",
    password: "1234",
  },
  {
    email: "liam@gmail.com", 
    username: "Liam",
    password: "1234",
  },
  {
    email: "emma@gmail.com", 
    username: "Emma",
    password: "1234",
  },
  {
    email: "james@gmail.com", 
    username: "James",
    password: "1234",
  },
]


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

app.post("/reviews/register", (req, res, next) => {

  console.log("REGISTER PAGE")

  try {
    const {email, username, password} = req.body;

    if (!email || !username || !password) {
      throw new Error("All fields are required");
    }

    let present = false;
    users.forEach(user => {
      if (user.email == email) {
        present = true;
      }
    })

    
    if (present) {
      return res.status(400).json({ error: "User already exists" });
    }
    
    users.push({email, username, password});
    console.log(users);
    res.redirect("http://localhost:3000/login");
  }
  catch (err) {
    next(err);
  }
});

app.post("/reviews/login", (req, res) => {   
    const {username, password} = req.body;

    console.log(req.body);

    const user = users.find((c) => c.username === username && c.password === password);

    if(user){
      res.redirect("http://localhost:3000/reviews");
    }else{
      console.log("Invalid credentials");
      res.redirect("http://localhost:3000/login");
    }
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

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
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

