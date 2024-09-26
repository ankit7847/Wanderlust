const express = require("express");
const router = express.Router({ mergeParams: true });  // mergeParams allows us to access :id from the parent route
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const Review = require("../models/review.js");
const reviewController = require("../controllers/reviews.js")


// Post a new review
router.post("/",isLoggedIn , validateReview, wrapAsync(reviewController.createReview));

// Delete a review
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
