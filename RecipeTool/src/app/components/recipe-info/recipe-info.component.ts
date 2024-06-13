import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Receta } from 'src/app/models/Receta';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { BuyList } from 'src/app/models/BuyList';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class RecipeInfoComponent implements OnInit{

  @Input() recipe!: Receta;
  buyLists: BuyList[] = [];
  ingredienteActual: string = '';
  presentingElement!: HTMLElement | null;

  constructor(private modalCtrl: ModalController, private _userService: UserService) {  }

  async ngOnInit() {
    console.log(this.recipe);
    this.presentingElement = document.querySelector('.ion-page');
    this.buyLists = await this._userService.getBuyList()
    console.log(this.buyLists)
  }

  onWillDismiss(event: Event) {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async addIngredient(ingredient: string, idBuyList: number) {
    let response = await this._userService.addIngredientToList(ingredient, idBuyList)

    console.log(response)
    return response
  }

  handleSelectEvent(event: any) {
    let idBuyList = event.target.value
    let ingredient = this.ingredienteActual

    console.log(ingredient)
    console.log(idBuyList)

    this.addIngredient(ingredient, idBuyList)
  }

  addingredient(ingredient: string) 
  {
    this.ingredienteActual = ingredient
      return ingredient
  }

}
