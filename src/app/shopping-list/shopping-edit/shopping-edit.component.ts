import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static: false}) slForm: NgForm;
subscription: Subscription;
itemName: string;
itemAmount: number;
editMode = false;
editedItemIndex: number;
editedItem: Ingredient;
//@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
    }
    );
  }
onSubmit(form: NgForm){
  const value = form.value;
  let myModel = new Ingredient(value.name, value.amount);
  if(this.editMode){
    this.shoppingListService.updateIngredient(this.editedItemIndex, myModel);
  }
    else{
      this.shoppingListService.addIngredient(myModel);
    }
    this.editMode = false;
    form.reset();
  }
//this.ingredientAdded.emit(myModel);
onClear(){
  this.slForm.reset();
  this.editMode = false;
}
onDelete(){
  this.shoppingListService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
