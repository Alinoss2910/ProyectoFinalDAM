import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { RecipeDTO } from '../DTO/RecipeDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_USER_URL = environment.API_USER_URL

  constructor() { }

  login(user: User) {
    return axios.post(`${this.API_USER_URL}Login`, user)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  register(user: User) {
    return axios.post(`${this.API_USER_URL}Register`, user)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getUser(username: string) {
    return axios.get(`${this.API_USER_URL}GetUser/${username}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getFavorites() {
    return axios.get(`${this.API_USER_URL}FavoriteRecipes`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addFavorite(recipe: RecipeDTO) {
    return axios.post(`${this.API_USER_URL}AddFavoriteRecipe`, recipe)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
