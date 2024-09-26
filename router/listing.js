const express = require("express");
const router = express.Router();  // Add parentheses here
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");


router
.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

// New Route
router.get("/new",isLoggedIn, listingController.renderNewForm);


router
.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLoggedIn, isOwner,validateListing, wrapAsync(listingController.updateListing))
.delete(isOwner, wrapAsync(listingController.destryoListing));

// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));



module.exports = router;
