import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { RecipeDTO } from '../DTO/RecipeDTO';
import { BuyList } from '../models/BuyList';
import { Ingredient } from '../models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_USER_URL = environment.API_USER_URL
  loggedIn = false

  constructor() { 
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    console.log(axios.defaults.headers.common['Authorization']);
  }

  async login(user: User) {

    var response = await axios.post(`${this.API_USER_URL}Login`, user)
    console.log(response)
    if (response.data) {
      console.log("entra" + response.data)
      localStorage.setItem('token', response.data.token)
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

  async updateUser(user: User) {
    let response = await axios.put(`${this.API_USER_URL}EditUser`, user)

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

  async createBuyList(buylist: BuyList) {
    let response = await axios.post(`${this.API_USER_URL}CreateBuyList`, buylist)

    return response.data
  }

  async getBuyList() {
    let response = await axios.get(`${this.API_USER_URL}GetBuyLists`)
    console.log(response.data);
    
    return response.data
  }

  async deleteBuyList(idList: number) {
    let response = await axios.delete(`${this.API_USER_URL}DeleteBuyList/${idList}`)

    return response.data
  }

  async addIngredientToList(ingredient: string, idBuyList: number) {
    let ingredientSend = new Ingredient(ingredient, idBuyList)
    let response = await axios.post(`${this.API_USER_URL}AddIngredient`, ingredientSend)

    return response.data
  }

  async deleteIngredientFromList(idlist: number, idingredient: number) {
    let response = await axios.delete(`${this.API_USER_URL}RemoveIngredient?idList=${idlist}&idIngredient=${idingredient}`)

    return response.data
  }
}
