// Original file: ../proto/recipe.proto

import type { Recipe as _RecipePackage_Recipe, Recipe__Output as _RecipePackage_Recipe__Output } from '../RecipePackage/Recipe';

export interface Response {
  'code'?: (string);
  'message'?: (string);
  'recipe'?: (_RecipePackage_Recipe | null);
}

export interface Response__Output {
  'code'?: (string);
  'message'?: (string);
  'recipe'?: (_RecipePackage_Recipe__Output);
}
