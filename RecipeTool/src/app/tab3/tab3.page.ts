import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { RecipeDTO } from '../DTO/RecipeDTO';
import { Receta } from '../models/Receta';
import { ConnectionService } from '../services/connection.service';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { BuyList } from '../models/BuyList';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  recetasDTO: RecipeDTO[] = []
  recetas: Receta[] = []
  buyLists: BuyList[] = []

  constructor(private userService: UserService, private conService: ConnectionService, private platform: Platform, private router: Router) {
    this.getRecipes()
    this.getBuyLists()
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getRecipes()
      this.getBuyLists()
      event.target.complete();
    }, 2000);
  }

  async getFavorites() {
    let reci: Receta[] = [];
    const promises = this.recetasDTO.map(async (rec) => {
        try {
            const response = await this.conService.getRecipe(rec.url);
            console.log(`Recived recipe for URL ${rec.url}:`, response);
            reci.push(response[0]);
        } catch (error) {
            console.log(`Error fetching recipe for URL ${rec.url}:`, error);
        }
    });

    await Promise.all(promises);

    console.log('All recipes received:', reci);
    this.recetas = reci;
}

  getRecipes() {
    this.userService.getFavorites()
    .then((response) => {
      this.recetasDTO = response
      console.log(this.recetasDTO)
      this.getFavorites()
    })
  }

  async openRecipe(url: string) {
    if (this.platform.is('capacitor')) {
      await Browser.open({ url });
    } else {
      window.open(url, '_blank');
    }
  }

  async createBuyList(buylistName: string) {

    let buylist = new BuyList(buylistName)
    buylist.ingredients = []
    console.log(JSON.stringify(buylist));
    
    let response = await this.userService.createBuyList(buylist)

    return response.data
  }

  async deleteBuyList(id: number) {
    let response = await this.userService.deleteBuyList(id)

    return response.data
  }

  async getBuyLists() {
    let response = await this.userService.getBuyList()

    this.buyLists = response
    console.log(response);
    console.log(this.buyLists);
    
    return response.data
  }

  async deleteIngredientFromList(idList: number, idIngredient: number) {
    let response = await this.userService.deleteIngredientFromList(idList, idIngredient)

    return response.data
  }

  logout() {
    localStorage.removeItem('token')
    this.userService.loggedIn = false
    this.router.navigate(['/login'])
  }

  async updateUser(username: string, pass: string) {
    let user = new User(username, pass)
    let response = await this.userService.updateUser(user)
    return response.data
  }

}
