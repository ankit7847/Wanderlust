const express = require("express");
const router = express.Router({ mergeParams: true });  // mergeParams allows us to access :id from the parent route
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const Review = require("../models/review.js");



// Post a new review
router.post("/",isLoggedIn , validateReview, wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.review.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success" ,"New Review Created");
  res.redirect(`/listings/${listing._id}`);
}));

// Delete a review
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { review: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success" ,"Review Deleted");
  res.redirect(`/listings/${id}`);
}));

module.exports = router;
