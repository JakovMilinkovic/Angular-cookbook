import { Recipe } from "./recipe.model";
import {Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>(); 

    private recipes: Recipe[]=[
      new Recipe ('gulaš','pikantan i neodoljiv','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',[
        new Ingredient ('meso', 5),
        new Ingredient ('mozarella', 2),
        new Ingredient ('ljuta paprika',4)
      ]),
      new Recipe ('juha od gljiva','kremasta i odoljiva','https://podravkaiovariations.blob.core.windows.net/8329a11e-6424-11eb-a4d1-0242ac120063/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp',[
         new Ingredient('gljive', 10),
         new Ingredient('vrhnje', 1)
      ])
      ];
    getRecipes() {
      return this.recipes.slice();
    }

    constructor(private slService: ShoppingListService){

    }

    getRecipe(index: number){
      return this.recipes[index];
    }
    addIngredientsToShop(ingredients: Ingredient[]){
      this.slService.addIng(ingredients);
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
    

}