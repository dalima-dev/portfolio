const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

const projects = [
  {
    title: "MedicBank",
    image_src: "/img/medicbank.png",
    link: "https://medicbank-react.netlify.app/",
  },
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
    id: "git",
    name: "GIT",
    image_src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    image_src: "/icons/js.png",
  },
  {
    id: "typescript",
    name: "TypeScript",
    image_src:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  /*
  {
    id: "express",
    name: "Express",
    image_src:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  */
  {
    id: "react",
    name: "React",
    image_src: "/icons/react.png",
  },
  {
    id: "nest",
    name: "Nest",
    image_src:
      "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
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
