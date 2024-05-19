import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Receta, MealType  } from '../models/Receta';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  recetas: Receta[] = []

  constructor(private connection: ConnectionService) {
    this.getRecipes()
  }

  getRecipes() {
    this.connection.getRandomTypeOfMeal(MealType.Breakfast)
    .then((response) => {
      this.recetas = response
      console.log(this.recetas)
    })
  }

}
