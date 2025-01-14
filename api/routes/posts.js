const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/:id", PostsController.ShowPost);
router.patch("/:id/update", PostsController.UpdatePost);

module.exports = router;
