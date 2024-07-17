const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  descriptions: {
    type: String,
    require: true,
  },
});

const Blog = new mongoose.model("Blog", blogSchema);
module.exports = Blog;
