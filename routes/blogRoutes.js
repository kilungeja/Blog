const router = require("express").Router();
const Blog = require("../models/Blog");

router.post("/create", (req, res) => {
  const { title, body } = req.body;

  if (title === "" || body === "") {
    return res.status(400).json({ msg: "All fields are required" });
  }
  new Blog({
    title,
    body
  })
    .save()
    .then(blog => {
      const { title, body, created_at } = blog;
      res.json({ title, body, created_at });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Server Error" });
    });
});

router.get("/retrieve", (req, res) => {
  Blog.find()
    .then(blogs => {
      res.json(blogs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Server Error" });
    });
});

module.exports = router;
