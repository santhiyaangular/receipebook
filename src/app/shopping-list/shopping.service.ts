import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();
     ingredients: Ingredient[] = [ 
        new Ingredient('Apple',5), 
        new Ingredient('Tomato',10)
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index: number){
            return this.ingredients[index];
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      updateIngredient(index: number, newIngredient: Ingredient){
          this.ingredients[index] = newIngredient;
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
      deleteIngredient(index: number){
          this.ingredients.splice(index,1);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}