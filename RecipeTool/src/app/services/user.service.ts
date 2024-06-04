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
  loggedIn = false

  constructor() { }

  async login(user: User) {

    var response = await axios.post(`${this.API_USER_URL}Login`, user)
    console.log(response)
    if (response.data) {
      console.log("entra" + response.data)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      this.loggedIn = true
    }
    return response.data
  }

  isLoggedIn() {
    return this.loggedIn
  }

  async register(user: User) {
    let response = await axios.post(`${this.API_USER_URL}Register`, user)

    return response.data
  }

  async getUser(username: string) {
    let response = await axios.get(`${this.API_USER_URL}GetUser/${username}`)
  
    return response.data
  }

  async getFavorites() {
    let response = await axios.get(`${this.API_USER_URL}FavoriteRecipes`)

    return response.data
  }

  async addFavorite(recipe: RecipeDTO) {
    let response = await axios.post(`${this.API_USER_URL}AddFavoriteRecipe`, recipe)

    return response.data
  }
}
