import { Recipe } from "../../proto/RecipePackage/Recipe";
import { Recipes } from "../../proto/RecipePackage/Recipes";
import { Response } from "../../proto/RecipePackage/Response";
import { RecipeID } from "../../proto/RecipePackage/RecipeID";
import { collections } from "./db.controller";
import { ObjectId } from "mongodb";
import { RecipeWithID } from "../../proto/RecipePackage/RecipeWithID";

export class RecipeServerController {
    static async getAll(): Promise<Recipes | undefined> {
        try {
            const recipesDocs = await collections.recipes?.find().toArray();
            const recipesData = (recipesDocs as unknown) as Recipe[];
            let recipes: Recipes = {
                recipes: [],
            };
            recipesData.forEach((recipe) => {
                recipes.recipes?.push({
                    name: recipe.name,
                    description: recipe.description,
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                });
            });
            return recipes;
        } catch (err) {
            console.error("Error in getAll: \n", err);
        }
    }

    static async createRecipe(recipe: Recipe): Promise<Response | undefined> {
        try {
            const res = await collections.recipes?.insertOne(recipe);
            if (res) {
                const _res: Response = {
                    code: '201',
                    message: "Success creating new recipe",
                    recipe: {
                        name: recipe.name,
                        description: recipe.description,
                        ingredients: recipe.ingredients,
                        steps: recipe.steps,
                    }
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when creating new recipe",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in create recipe: \n", err);
        }
    }

    static async updateRecipe(recipeWithID: RecipeWithID): Promise<Response | undefined> {
        try {
            const res = await collections.recipes?.updateOne(
                {
                    _id: new ObjectId(recipeWithID.recipeId?.id),
                },
                {
                    $set: recipeWithID.recipe,
                }
            );
            if (res) {
                const _res: Response = {
                    code: '200',
                    message: "Success updating recipe",
                    recipe: {
                        name: recipeWithID.recipe?.name,
                        description: recipeWithID.recipe?.description,
                        ingredients: recipeWithID.recipe?.ingredients,
                        steps: recipeWithID.recipe?.steps,
                    }
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when updating recipe",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in update recipe: \n", err);
        }
    }

    static async deleteRecipe(recipeID: RecipeID): Promise<Response | undefined> {
        try {
            const res = await collections.recipes?.deleteOne({
                _id: new ObjectId(recipeID.id),
            });
            if (res) {
                const _res: Response = {
                    code: '200',
                    message: "Success deleting recipe",
                    recipe: null
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when deleting recipe",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in delete recipe: \n", err);
        }
    }
}
