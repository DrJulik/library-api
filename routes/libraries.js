const express = require("express");
const { getLibraries, getLibrary } = require("../controllers/libraries");
const router = express.Router();

router.route("/").get(getLibraries);
router.route("/:id").get(getLibrary);

module.exports = router;
