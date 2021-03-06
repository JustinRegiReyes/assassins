var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var GameSchema = new Schema ({
	title: {
		type: String,
		required: true,
		unique: true
	},
	picture: {
		type: String,
		default: "http://www.wall321.com/thumbnails/detail/20120228/assassin%20assassins%20creed%20futuristic%20grim%20artwork%201280x1024%20wallpaper_www.wall321.com_59.jpg",
		unique: false
	},
	end_date: {
		type: Date,
		default: null
	},
	additional_rules: {
		type: String
	},
	key: {
		type: String,
		required: true,
		unique: false
	},
	game_is_over: {
		type: Boolean,
		default: false
	},
	game_started_on: {
		type: Date,
		default: null
	},
	game_started: {
		type: Boolean,
		default: false
	},
	admin: {
		type: String,
		default: null
	},
	posts: [],
	players: []

});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;