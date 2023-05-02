const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");


// GET all of the comments
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET one post
router.get("/new", (req, res) => {
  res.render("new_post");
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["name"],
          },
        },
      ],
    });

    if (!postData) {
      return res.status(404).json({ message: "Post not found" });
    }

    const post = postData.get({ plain: true });

    res.render("edit_post", {
      ...post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
