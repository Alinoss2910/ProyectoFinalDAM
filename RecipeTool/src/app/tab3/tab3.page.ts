import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { RecipeDTO } from '../DTO/RecipeDTO';
import { Receta } from '../models/Receta';
import { ConnectionService } from '../services/connection.service';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  recetasDTO: RecipeDTO[] = []
  recetas: Receta[] = []

  constructor(private userService: UserService, private conService: ConnectionService, private platform: Platform) {
    this.getRecipes()
    
  }

  async getFavorites() {
    let reci: Receta[] = [];
    const promises = this.recetasDTO.map(async (rec) => {
        try {
            const response = await this.conService.getRecipe(rec.url);
            console.log(`Received recipe for URL ${rec.url}:`, response);
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

}
