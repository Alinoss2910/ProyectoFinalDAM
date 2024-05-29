import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Receta, CuisineType, MealType, DishType, HealthLabel, DietLabel } from '../models/Receta';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recetas: Receta[] = [];
  CuisineTypes: string[] = Object.values(CuisineType);
  MealTypes: string[] = Object.values(MealType);
  DishTypes: string[] = Object.values(DishType);
  HealthLabels: string[] = Object.values(HealthLabel);
  DietLabels: string[] = Object.values(DietLabel);

  FilterString = '';
  cuisineString = '';
  mealString = '';
  dishString = '';
  healthString = '';
  dietString = '';


  constructor(private connection: ConnectionService) {}

  getRecipes(query: string, filtros: string) {
    this.connection.getRecipes(query, filtros)
    .then((response) => {
      this.recetas = response;
      console.log(this.recetas);
      this.FilterString = '';
    });
  }

  handleFilterEvent(event: any) {
    switch(event.target.name) {
      case 'cuisineType':
        this.cuisineString = '';
        for (let cuisineType of event.target.value) {
          this.cuisineString += `&cuisineType=${cuisineType}`;
        }
        break;
      case 'mealType':
        this.mealString = '';
        for (let mealType of event.target.value) {
          this.mealString += `&mealType=${mealType}`;
        }
        break;
      case 'dishType':
        this.dishString = '';
        for (let dishType of event.target.value) {
          this.dishString += `&dishType=${dishType}`;
        }
        break;
      case 'healthLabel':
        this.healthString = '';
        for (let healthLabel of event.target.value) {
          this.healthString += `&healthLabel=${healthLabel}`;
        }
        break;
      case 'dietLabel':
        this.dietString = '';
        for (let dietLabel of event.target.value) {
          this.dietString += `&dietLabel=${dietLabel}`;
        }
        break;
      default:
        console.log('No filter selected');
    }
    this.FilterString = this.cuisineString + this.mealString + this.dishString + this.healthString + this.dietString;
  }

  handleSearchEvent(query: string = "") {
    this.getRecipes(query, this.FilterString);
  }
}
