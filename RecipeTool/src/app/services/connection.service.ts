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

  constructor() { }

  async getRecipes(query: string) {
    axios.get(`${this.API_URL}${query}&app_id=${this.API_ID}&app_key=${this.API_KEY}`)
    .then((response) => {
      this.recetas = response.data.hits
      console.log(this.recetas)
    })
    .catch((error) => {
      console.log(error)
    })

    return this.recetas
  }
}
