const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const artificialDelay = 500;

// This should mach the FE interface. Consider extracting BE/FE contracts ina commonly accessable location
const Genre = {
  Any: "ANY",
  Action: "ACTION",
  Comedy: "COMEDY",
  Thriller: "THRILLER",
  Horror: "HORROR",
  SciFi: "SCIFI",
  Romance: "ROMANCE",
  Drama: "DRAMA",
};

// TODO: use Mongo or another db source - for this purpose, NoSQL db will be a better fit
// This should match the contract defined on FE at "src\state\interfaces.tsx"
const movies = [
  {
    id: 0,
    name: "The Matrix",
    genre: Genre.Action,
    rating: 5,
    thumbnailURL:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    favorite: true,
    watched: true,
    shortDescription:
      "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in the Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano.",
  },
  {
    id: 1,
    name: "Two and a half man",
    genre: Genre.Comedy,
    rating: 5,
    thumbnailURL:
      "https://icons.veryicon.com/256/Movie%20%26%20TV/TV%20Series%20Folder/Two%20and%20a%20Half%20Men.png",
    favorite: false,
    watched: true,
    shortDescription:
      "Two and a Half Men is an American television sitcom, created by Chuck Lorre and Lee Aronsohn, that aired on CBS for 12 seasons from September 22, 2003, to February 19, 2015",
  },
  {
    id: 2,
    name: "Baby Boss",
    genre: Genre.Comedy,
    rating: 3,
    thumbnailURL: "",
    favorite: true,
  },
  {
    id: 3,
    name: "6th sense",
    genre: Genre.Thriller,
    rating: 4,
    thumbnailURL: "",
  },
  {
    id: 4,
    name: "Scream",
    genre: Genre.Horror,
    rating: 1,
    thumbnailURL: "",
  },
];

const moviesDetails = [
  {
    id: 0,
    details: {
      previewURL: "https://www.youtube.com/embed/m8e-FF8MsqU",
      description:
        'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in the Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality created by intelligent machines. Believing computer hacker Neo to be "the One" prophesied to defeat them, Morpheus recruits him into a rebellion against the machines.',
      actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss and more",
    },
  },
  {
    id: 1,
    details: {
      previewURL: "https://www.youtube.com/embed/097pUW0L_Xc",
      description:
        "Two and a Half Men is an American television sitcom, created by Chuck Lorre and Lee Aronsohn, that aired on CBS for 12 seasons from September 22, 2003, to February 19, 2015. It originally starred Charlie Sheen in the lead role, alongside Jon Cryer and Angus T. Jones. Holland Taylor, Marin Hinkle, Conchata Ferrell, and Melanie Lynskey starred in supporting roles. The series was about a hedonistic jingle writer, Charlie Harper, his uptight brother, Alan, and Alan's mischievous son, Jake. As Alan's marriage falls apart and divorce appears imminent, he and Jake move into Charlie's beachfront Malibu house and complicate Charlie's freewheeling life. In February 2011, CBS and Warner Bros. Television decided to end production for the rest of the eighth season after Sheen entered drug rehabilitation and made \"disparaging\" comments about Lorre.[1] Sheen's contract was terminated the following month, and he was written out of the show after it was confirmed that he would not be returning to the series.[2] Ashton Kutcher was hired to replace him for the ninth season as Walden Schmidt, a billionaire who buys Charlie's house after his death. Cryer was promoted to the lead role, and Amber Tamblyn joined the main cast in the eleventh season, since Jones was attending college and he was relegated to recurring status but did not make an appearance until the series finale.[3] The success of the series led to it being the third-highest revenue-generating program for late 2012, earning $3.24 million an episode.[4]",
      actors: "Charlie Sheen, Jon Cryer, Angus T. Jones and more",
    },
  },
  {
    id: 2,
    details: {
      description: "third description",
      actors: "Mohammad Abdus Salam",
    },
  },
  {
    id: 3,
    details: {
      description: "fourth description",
      actors: "Percy Lavon Julian",
    },
  },
  {
    id: 4,
    details: {
      description: "fifth description",
      actors: "Subrahmanyan Chandrasekhar",
    },
  },
];

app.use(cors());

// TODO: add error handling middleware
app.get("/movies", (req, res) => {
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json").send(movies);
  }, artificialDelay);
});

app.get("/movies/:id", (req, res) => {
  setTimeout(() => {
    res
      .setHeader("Content-Type", "application/json")
      .send(moviesDetails[req.params.id].details);
  }, artificialDelay);
});

app.get("/movies/categories/:category", (req, res) => {
  res
    .setHeader("Content-Type", "application/json")
    .send(
      req.params.category === Genre.Any
        ? movies
        : movies.filter((movie) => movie.genre === req.params.category)
    );
});

app.post("/movies/favorites/:id", (req, res) => {
  movies[req.params.id].favorite = true;
  res
    .status(200)
    .setHeader("Content-Type", "application/plaintext")
    .send(req.params.id);
});

app.delete("/movies/favorites/:id", (req, res) => {
  movies[req.params.id].favorite = false;
  res
    .status(200)
    .setHeader("Content-Type", "application/plaintext")
    .send(req.params.id);
});

app.use((req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/plaintext")
    .send("Use specific REST endpoints to interact with the server.");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
