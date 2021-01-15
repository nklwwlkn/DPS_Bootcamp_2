const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    time: String,
    ingredients: Array,
    descriptions: Array
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;