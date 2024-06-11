import { Injectable } from '@angular/core';
import axios from 'axios';
import { Receta } from '../models/Receta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  recetas: Receta[] = [];
  API_URL = environment.API_URL
  API_ID = environment.API_ID
  API_KEY = environment.API_KEY
  API_URI = environment.API_URL_URI

  constructor() { }

  async getRecipes(query: string, filtros: string) {
    return axios.get(`${this.API_URL}${query}&app_id=${this.API_ID}&app_key=${this.API_KEY}${filtros}`)
    .then((response) => {
      return response.data.hits
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async getRecipe(uri: string) {
    uri = uri.replace('#', '%23')
    return axios.get(`${this.API_URI}${uri}&app_id=${this.API_ID}&app_key=${this.API_KEY}&field=uri&field=label&field=image&field=healthLabels&field=cautions&field=ingredientLines&field=totalWeight&field=calories&field=url&field=digest`)
    .then((response) => {
      return response.data.hits
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getRandomTypeOfMeal(mealType: string) {
    return axios.get(`${this.API_URL}&app_id=${this.API_ID}&app_key=${this.API_KEY}&mealType=${mealType}&random=true&from=0&to=5`)
    .then((response) => {
      return response.data.hits
    })
    .catch((error) => {
      console.log(error)
    })
  }
}


