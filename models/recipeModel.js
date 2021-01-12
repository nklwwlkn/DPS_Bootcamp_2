const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
    type: String,
    trim: true,
    },
    time: {
      type: String,
      default: 0,
      select: false
    },
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