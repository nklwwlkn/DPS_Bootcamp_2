const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    time: String,
    ingredients: String,
    desctriptions: String
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;