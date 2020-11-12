import { Injectable } from '@angular/core';
import { Receipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.service';


@Injectable()
export class ReceipeService{
    
    receipes: Receipe[]=[
        new Receipe('Biriyani', 'My favourite', '../../assets/biriyani.jpg',[new Ingredient('rice',2),
                                                                            new Ingredient('tomato',4)]),
        new Receipe('Halwa', 'Tastes snack', '../../assets/halwas.jpg',[new Ingredient('wheat',2),
                                                                     new Ingredient('sugar',4)]),
        new Receipe('Bavbaji','Yummy','../../assets/bavbaji.jpg',[new Ingredient('bun',2),
                                                                new Ingredient('tomato',4)]),
        new Receipe('Panner butter masala','Healthy','../../assets/Paneer butter masala.jpg',[new Ingredient('paneer',2),
                                                                                            new Ingredient('onion',4)]),
        new Receipe('Macaroon','Thoothukudi famous ','../../assets/macaroon.jpg',[new Ingredient('milk',2),
                                                                                    new Ingredient('egg',4)])
        
      ];   
      constructor(private shoppingListService: ShoppingListService){}
      getReceipes(){
          return this.receipes.slice();
      }
      getReceipe(index: number){
        return this.receipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}