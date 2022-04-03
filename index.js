const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

let language = "portuguese";

const projects = [
  {
    id: 1,
    title: "DeVinos",
    image_src: "/img/devinos128.png",
    link: "devvinos.herokuapp.com",
  },
];
const stacks = [
  {
    name: "HTML",
    image_src: "/icons/html-5.png",
  },
  {
    name: "CSS",
    image_src: "/icons/css-3.png",
  },
  {
    name: "JavaScript",
    image_src: "/icons/js.png",
  },

  {
    name: "Express",
    image_src: "/icons/express.png",
  },
];

app.get("/", (req, res) => {
  res.render("index", { stacks, projects });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
