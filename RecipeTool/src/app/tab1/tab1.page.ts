import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Receta, MealType  } from '../models/Receta';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  recetasBreakfast: Receta[] = []
  recetasBrunch: Receta[] = []
  recetasLunch: Receta[] = []
  recetasSnack: Receta[] = []
  recetasTeaTime: Receta[] = []

  constructor(private connection: ConnectionService) {
    this.getBreakfasts()
    this.getBrunchs()
    this.getLunchs()
    this.getSnacks()
    this.getTeasTime()
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getBreakfasts()
      this.getBrunchs()
      this.getLunchs()
      this.getSnacks()
      this.getTeasTime()
      event.target.complete();
    }, 2000);
  }

  getBreakfasts() {
    this.connection.getRandomTypeOfMeal(MealType.Breakfast)
    .then((response) => {
      this.recetasBreakfast = response
      console.log(this.recetasBreakfast)
    })
  }

  getBrunchs() {
    this.connection.getRandomTypeOfMeal(MealType.Lunch)
    .then((response) => {
      this.recetasBrunch = response
      console.log(this.recetasBrunch)
    })
  }

  getLunchs() {
    this.connection.getRandomTypeOfMeal(MealType.Dinner)
    .then((response) => {
      this.recetasLunch = response
      console.log(this.recetasLunch)
    })
  }

  getSnacks() {
    this.connection.getRandomTypeOfMeal(MealType.Snack)
    .then((response) => {
      this.recetasSnack = response
      console.log(this.recetasSnack)
    })
  }

  getTeasTime() {
    this.connection.getRandomTypeOfMeal(MealType.TeaTime)
    .then((response) => {
      this.recetasTeaTime = response
      console.log(this.recetasTeaTime)
    })
  }

}
