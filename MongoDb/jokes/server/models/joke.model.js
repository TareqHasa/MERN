const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
		type:String,
		required:[true,"setup is required"],
		minlength:[10,"setup must be at least 10 character long"]
	} ,
	punchline:{
		type: String,
		required:[true,"setup is required"],
		minlength:[3,"setup must be at least 10 character long"]
	}
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;