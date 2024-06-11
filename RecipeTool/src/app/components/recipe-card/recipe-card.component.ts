import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { Receta } from '../../models/Receta';
import { RecipeDTO } from '../../DTO/RecipeDTO';
import { UserService } from '../../services/user.service';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { ModalController } from '@ionic/angular';
import { RecipeInfoComponent } from '../recipe-info/recipe-info.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RecipeCardComponent {

  @Input() recetas: Receta[] = [];
  @Input() isFavorite: boolean = false;
  receta!: RecipeDTO;

  constructor(private userService: UserService, private platform: Platform, private modalCtrl: ModalController) { }

  addFavorite(uri: string) {
    console.log(uri);
    this.receta = new RecipeDTO(uri, 1);
    this.userService.addFavorite(this.receta);
  }

  async infoRecipe(receta: Receta) {
    const modal = await this.modalCtrl.create({
      component: RecipeInfoComponent,
      componentProps: {
        recipe: receta
      }
    });
    modal.present();
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
