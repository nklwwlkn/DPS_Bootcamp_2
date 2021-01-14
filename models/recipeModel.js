const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    time: String,
    ingredients: {
      type: Array,
    },
    desctriptions: {
      type: Array
    }
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;