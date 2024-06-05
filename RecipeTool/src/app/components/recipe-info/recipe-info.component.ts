import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Receta } from 'src/app/models/Receta';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class RecipeInfoComponent implements OnInit{

  @Input() recipe!: Receta;
  presentingElement!: HTMLElement | null;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.recipe);
    this.presentingElement = document.querySelector('.ion-page');
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
