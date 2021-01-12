const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
    type: String,
    trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  }
);


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;