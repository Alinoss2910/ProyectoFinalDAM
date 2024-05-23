import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { Receta } from '../models/Receta';
import { RecipeDTO } from '../DTO/RecipeDTO';
import { UserService } from '../services/user.service';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class RecipeCardComponent {

  @Input() recetas: Receta[] = [];
  receta!: RecipeDTO;

  constructor(private userService: UserService, private platform: Platform) { }

  addFavorite(uri: string) {
    console.log(uri);
    this.receta = new RecipeDTO(uri, 1);
    this.userService.addFavorite(this.receta);
  }

  async openRecipe(receta: Receta) {
    console.log(receta);
    if (this.platform.is('capacitor')) {
      await Browser.open({ url: receta.recipe.url });
    } else {
      await window.open(receta.recipe.url, '_blank');
    }
  }

}
