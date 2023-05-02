const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoute");
const commentRoute = require("./commentroute");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoute);

module.exports = router;
