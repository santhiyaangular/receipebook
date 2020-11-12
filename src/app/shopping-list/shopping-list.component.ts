import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
ingredients: Ingredient[];
private igChangeSub: Subscription;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.igChangeSub = this.shoppingList.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number){
    this.shoppingList.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
