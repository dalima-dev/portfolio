const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

let language = "portuguese";

const projects = [
  {
    title: "titulo",
    src: "",
  },
];
const stacks = [
  {
    name: "HTML",
    src: "/icons/html-5.png",
  },
  {
    name: "CSS",
    src: "/icons/css-3.png",
  },
  {
    name: "JavaScript",
    src: "/icons/js.png",
  },

  {
    name: "Express",
    src: "/icons/express.png",
  },
];

app.get("/", (req, res) => {
  res.render("index", { stacks, projects });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
