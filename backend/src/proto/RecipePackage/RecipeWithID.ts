// Original file: ../proto/recipe.proto

import type { RecipeID as _RecipePackage_RecipeID, RecipeID__Output as _RecipePackage_RecipeID__Output } from '../RecipePackage/RecipeID';
import type { Recipe as _RecipePackage_Recipe, Recipe__Output as _RecipePackage_Recipe__Output } from '../RecipePackage/Recipe';

export interface RecipeWithID {
  'recipeId'?: (_RecipePackage_RecipeID | null);
  'recipe'?: (_RecipePackage_Recipe | null);
}

export interface RecipeWithID__Output {
  'recipeId'?: (_RecipePackage_RecipeID__Output);
  'recipe'?: (_RecipePackage_Recipe__Output);
}
