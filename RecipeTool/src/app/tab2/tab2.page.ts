import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Receta } from '../models/Receta';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recetas: Receta[] = []

  constructor(private connection: ConnectionService) {}

  getRecipes(query: string) {
    this.connection.getRecipes(query)
    .then((response) => {
      this.recetas = response
      console.log(this.recetas)
    })
  }
}
