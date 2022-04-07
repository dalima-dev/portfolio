const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

const projects = [
  {
    title: "DeVinos",
    image_src: "/img/devinos.png",
    link: "https://devvinos.herokuapp.com",
  },
  {
    title: "Bouncing balls",
    image_src: "/img/balls.png",
    link: "https://dalima-dev.github.io/CANVAS/BoucingBalls",
  },
  {
    title: "Particles",
    image_src: "/img/particles.png",
    link: "https://dalima-dev.github.io/CANVAS/Particles",
  },
  {
    title: "Emoticons",
    image_src: "/img/emoticons.png",
    link: "https://dalima-dev.github.io/Emoticons",
  },
];

const stacks = [
  {
    id: "html",
    name: "HTML",
    image_src: "/icons/html-5.png",
  },
  {
    id: "css",
    name: "CSS",
    image_src: "/icons/css-3.png",
  },
  {
    id: "javascript",
    name: "JavaScript",
    image_src: "/icons/js.png",
  },

  {
    id: "express",
    name: "Express",
    image_src: "/icons/express.png",
  },
  {
    id: "react",
    name: "React",
    image_src: "/icons/react.png",
  },
];

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/contact-en", (req, res) => {
  res.render("contact-en");
});

app.get("/en", (req, res) => {
  res.render("index-en", { stacks, projects });
});

app.get("/", (req, res) => {
  res.render("index", { stacks, projects });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
