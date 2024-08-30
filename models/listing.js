const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type:String,
        require : true,
    },
    description:true,
    image:{
        type :String,
        set:(v)=> v === "" ? "https://www.istockphoto.com/photo/sunset-beach-scene-with-tall-palm-trees-people-walking-and-a-coastal-building-under-gm1922043323-555427353?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsunsset-with-coconut-tree&utm_medium=affiliate&utm_source=unsplash&utm_term=sunsset+with+coconut+tree%3A%3A%3A" : v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;